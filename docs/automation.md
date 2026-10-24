# n8n automation: the public boundary

[Back to the project](../README.md)

The project has two conversation-time tool workflows and one post-call reporting workflow. The public files preserve only their general shape.

## Tool A: from installment count

Conceptually, this endpoint accepts an amount and a proposed number of installments, then returns structured calculation results. Conversation behavior and business authorization remain separate from the arithmetic.

Public canvas: input webhook → code placeholder → webhook response.

The actual parser, calculation, policy checks, response mapping and endpoint configuration are not included.

## Tool B: from monthly budget

This direction starts with a proposed monthly amount and derives a potential installment structure. It gives the conversation another way to work with a customer's proposal.

Public canvas: input webhook → code placeholder → webhook response.

No production formulas, fee logic, boundary values or implementation details are distributed.

## Post-call reporting

The supplied reporting workflow uses an event-type condition. The relevant branch writes to Google Sheets and sends an internal email; the other branch goes to a no-op node.

The public scaffold retains that broad shape. It contains no filter expression, report columns, document IDs, sheet names, email recipients, message templates, authentication or sample execution data.

This scaffold does not implement business qualification rules. In particular, an event filter should not be mistaken for a decision engine that has approved an agreement.

## What a reader must implement

| Area | Public state |
| --- | --- |
| Webhook path and authentication | Empty; configure independently. |
| Input parsing and validation | Private implementation omitted. |
| Calculation and policy checks | Private implementation omitted. |
| Tool response schema | Private implementation omitted. |
| Reporting event condition | Empty. |
| Spreadsheet destination and mapping | Empty. |
| Email destination and content | Empty. |
| Credentials | Absent. |
| Pinned data | Empty. |
| Activation | Disabled. |

The accompanying offline example demonstrates only a basic JavaScript object transformation. It has no n8n-specific runtime code and is not a replacement for any production node.
