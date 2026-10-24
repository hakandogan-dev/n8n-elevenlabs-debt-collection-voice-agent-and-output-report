# Evaluation approach and evidence limits

[Back to the project](../README.md)

Voice agents need evaluation at several levels: what was said, where the workflow moved, which tool result was used, and what the operational system recorded.

The following is a suggested review matrix, not a claim that all of these scenarios have passed a production test suite.

| Scenario family | Useful question |
| --- | --- |
| Unclear identity | Does uncertainty prevent confidential case disclosure? |
| Missing case information | Does the agent avoid inventing an answer? |
| Payment intention | Is an intention kept distinct from a confirmed commitment? |
| Installment proposal | Does the agent use the appropriate external calculation direction? |
| Tool failure | Does the agent avoid presenting an unavailable result as confirmed? |
| Changed customer request | Does the conversation retain context while changing responsibility? |
| Employee request | Is the requested review preserved without an unsupported live-transfer promise? |
| Document request | Is a request distinguished from completed dispatch? |
| Delivery contact uncertainty | Is uncertainty captured for follow-up? |
| Post-call reporting | Does the recorded outcome match the conversation? |
| Repeated event | Can an independent implementation avoid duplicate side effects? |

## Validation included here

The local tests cover the small public event-envelope example, including invalid input and the exclusion of unrelated fields. A separate structural check verifies the restricted n8n scaffolds, their connections and local Markdown links.

These checks do not run the production prompts, execute payment calculations, authenticate external webhooks, import workflows into a live n8n editor or validate external delivery.

## Performance claims

This release contains no benchmark, conversion-rate claim, collection total, deployment scale or measured latency claim. The workflow screenshot and the repository structure are explanatory materials rather than performance evidence.
