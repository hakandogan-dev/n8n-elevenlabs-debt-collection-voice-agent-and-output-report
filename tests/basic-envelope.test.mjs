import test from 'node:test';
import assert from 'node:assert/strict';
import { makeEnvelope } from '../examples/basic-envelope.mjs';

test('the public demo returns a minimal offline envelope', () => {
  const result = makeEnvelope({ type: 'demo.call.completed', call_id: 'demo-001' });
  assert.equal(result.mode, 'offline_demo');
  assert.equal(result.call_id, 'demo-001');
});

test('unrecognized and incomplete events are rejected', () => {
  for (const event of [null, {}, { type: 'other' }, { type: 'demo.call.completed' }]) {
    assert.throws(() => makeEnvelope(event), TypeError);
  }
});

test('extra input fields are not propagated into the output', () => {
  const result = makeEnvelope({
    type: 'demo.call.completed', call_id: 'demo-002',
    transcript: 'Synthetic field that must not be forwarded.',
    arbitrary_field: 'not needed',
  });
  assert.deepEqual(Object.keys(result).sort(), ['call_id', 'message', 'mode']);
});

test('the fixture is not accepted with a non-demo identifier', () => {
  assert.throws(() => makeEnvelope({ type: 'demo.call.completed', call_id: 'other-001' }), TypeError);
});
