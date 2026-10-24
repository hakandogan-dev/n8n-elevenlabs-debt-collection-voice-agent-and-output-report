# Architecture and engineering boundaries

[Back to the project](../README.md)

Milan brings together real-time conversation, stage-based routing, external calculations and post-call reporting. I use this separation to make each component's responsibility easier to reason about.

## Conversation versus workflow

The conversation layer interprets what the person says and generates a relevant response. The workflow gives that conversation an explicit structure: an identity stage has a different job from a payment discussion or a document request.

That distinction matters when a person changes direction. Someone may ask for documents in the middle of a payment discussion, or request an employee while answering an identity question. A useful design needs to retain the current context while moving to the appropriate responsibility.

The public edition describes the stages without reproducing the complete graph, edge conditions, priorities or fallback instructions.

## Shared behavior and stage-specific behavior

The source configuration has both shared agent instructions and instructions attached to workflow stages. At a design level, these serve different purposes:

| Scope | Example responsibility |
| --- | --- |
| Shared behavior | Communication style, confidentiality and limits on the agent's authority. |
| Stage behavior | The immediate objective of identity clarification, payment discussion or document handling. |
| External tools | Numeric calculations with structured inputs and outputs. |
| Post-call analysis | Capture outcomes after the conversation. |

Neither instruction layer is included in this repository. These examples describe ownership, not prompt fragments.

## Case context is data

Case information is supplied at runtime. Keeping it separate from general conversation behavior allows the same agent structure to work with different cases.

A supplied value does not automatically mean it can be disclosed. The conversation still needs to satisfy its identity and confidentiality requirements. Missing values should remain missing rather than being filled in by the model.

The private variable inventory, example identities and internal field mappings are excluded from the public release.

## Arithmetic and authority are separate questions

An installment tool can calculate a result. Whether that result can be offered is a separate business decision. The agent should not treat successful arithmetic as authorization to make a commitment.

The source project has a tool for a requested installment count and a tool for a requested monthly amount. This release names those directions without exposing fee calculations, thresholds, policy limits or the production code.

## Reporting is an operational boundary

The supplied post-call workflow receives an event, checks its type, writes a row to a reporting sheet and sends an internal email on the relevant branch. The alternative branch is a no-op.

This establishes an integration pattern. It does not establish that each conversation outcome is correct, that each external action succeeded, or that payment was received. Those are distinct pieces of evidence.

## Extensions to validate separately

For an independent implementation, authenticated event intake, duplicate-event handling, output failure handling and restricted access to operational records are useful review points. They are not represented as completed features of the supplied project or of the public scaffolds.
