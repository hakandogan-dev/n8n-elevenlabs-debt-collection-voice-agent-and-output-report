import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname, join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const skeletons = readdirSync(join(root, 'workflows')).filter(f => f.endsWith('.json'));
assert.equal(skeletons.length, 3, 'Expected three public scaffolds.');
for (const file of skeletons) {
  const workflow = JSON.parse(readFileSync(join(root, 'workflows', file), 'utf8'));
  assert.equal(workflow.active, false, `${file}: must remain inactive`);
  assert.deepEqual(workflow.pinData, {}, `${file}: no pinned executions`);
  assert.deepEqual(Object.keys(workflow).sort(), ['active', 'connections', 'name', 'nodes', 'pinData', 'settings']);
  const names = new Set(workflow.nodes.map(n => n.name));
  assert.equal(names.size, workflow.nodes.length, `${file}: duplicate node names`);
  for (const node of workflow.nodes) {
    assert.deepEqual(Object.keys(node).sort(), ['id', 'name', 'parameters', 'position', 'type', 'typeVersion']);
    if (!node.type.endsWith('.stickyNote')) {
      assert.deepEqual(node.parameters, {}, `${file}: operational parameters must stay empty`);
    }
  }
  for (const [source, branches] of Object.entries(workflow.connections)) {
    assert(names.has(source), `${file}: unknown source`);
    for (const outputs of Object.values(branches)) {
      for (const edges of outputs) for (const edge of edges) {
        assert(names.has(edge.node), `${file}: unknown destination`);
      }
    }
  }
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

let markdownFiles = 0;
for (const file of walk(root)) {
  if (!file.endsWith('.md')) continue;
  markdownFiles++;
  const content = readFileSync(file, 'utf8');
  for (const match of content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^https?:/.test(target)) continue;
    assert(existsSync(resolve(dirname(file), target)), `Broken local link in ${file}: ${target}`);
  }
  for (const match of content.matchAll(/src="([^"]+)"/g)) {
    assert(existsSync(resolve(dirname(file), match[1])), `Missing image in ${file}`);
  }
}
console.log(`Checked ${skeletons.length} inactive scaffolds and ${markdownFiles} Markdown files.`);
console.log('Structural checks only; this is not a universal secret scanner.');
