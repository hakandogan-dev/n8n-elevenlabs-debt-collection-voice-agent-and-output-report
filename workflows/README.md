# n8n canvas scaffolds

[Back to the project](../README.md)

These JSON files were written from scratch for this public repository. They are not sanitized copies of the operational exports.

| File | General purpose |
| --- | --- |
| [installments-by-count.skeleton.json](installments-by-count.skeleton.json) | Show the input → calculation → response pattern. |
| [installments-by-budget.skeleton.json](installments-by-budget.skeleton.json) | Show the alternative calculation direction. |
| [post-call-reporting.skeleton.json](post-call-reporting.skeleton.json) | Show event filtering, reporting and notification routing. |

## Inspect in n8n

1. Open a separate workflow in your own n8n editor.
2. Use **Import from File** and choose one scaffold.
3. Read the sticky note and inspect the canvas.
4. Implement your own node parameters and credentials if you intend to build an independent workflow.

The operational nodes contain `{}` as their parameters. No Code node has a `jsCode` value. No webhook has a configured path, no filter has conditions, and no destination has a target or credential.

These are intentionally incomplete canvases. Import behavior may vary with n8n versions; live UI import is not part of this package's validation. Keep the scaffolds inactive until independently implemented and reviewed.

## Connection shapes

The two tool scaffolds each contain a Webhook, a Code node and a Respond to Webhook node. The reporting scaffold contains a Webhook, an If node, a Google Sheets node, a Gmail node and a No Operation node. Every scaffold also has one explanatory sticky note.

Sticky-note text is new public documentation. All other parameter objects are empty.
