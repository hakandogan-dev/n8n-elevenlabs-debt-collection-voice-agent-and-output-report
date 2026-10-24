# Conversation design, stage by stage

[Back to the project](../README.md)

This is a selective design walkthrough. It describes why the main stages exist without providing agent instructions, sample dialogue, private procedure text or a reconstructable routing specification.

## First contact

The opening and the first interactive response need to work together. If the platform already delivers an opening message, the next response should continue the conversation instead of sounding as though a second call has just started.

The engineering concern is continuity: determine what the person has already answered and move toward the next relevant step.

## Identity and confidentiality

The identity stage protects the transition from neutral contact to confidential case discussion. An unclear answer should not be interpreted as successful verification.

The source design includes clarification and alternative verification handling. The exact checks, comparison behavior, retry policy and exit conditions remain private. The public principle is that uncertainty must not silently unlock sensitive information.

## Explaining the case

Once the conversation is authorized to discuss the case, the agent needs to answer from the available context. It should distinguish a question about the reason for the call from a question about a specific case fact.

I keep the design focused on grounding: the agent can explain known information, acknowledge unavailable information and arrange an appropriate next step. It should not invent supporting evidence or imply access to records it does not have.

## Discussing full payment

A payment conversation can produce several levels of certainty. A person considering payment has not necessarily made a commitment, and a commitment is not proof that funds have arrived.

The purpose of this stage is to make the agreed next step understandable and reportable. The exact dialogue, date rules and confirmation sequence are withheld.

## Discussing installments

People naturally express installment proposals in different ways. Some start with a number of payments; others start with the amount they can pay each month.

The two tool directions support that distinction. The conversation identifies the kind of proposal, gathers its input and relies on the relevant calculation tool. The result still needs to be interpreted under approved policy before a commitment can be made.

This repository deliberately omits the production arithmetic, negotiation strategy, policy thresholds, fee structure and conflict-resolution rules.

## Answering objections and questions

An objection can contain a useful question. Repeating the same request does not answer it. The stage design therefore needs to preserve the person's actual concern and avoid restarting an argument that has already been addressed.

A request for evidence, a disagreement about the case and a request for an employee have different implications. The public documentation describes these categories without publishing the private response playbook or its full exception coverage.

## Employee review and callback

The employee path records why a person needs human attention and any useful message they choose to leave. It should preserve that follow-up once accepted rather than pulling the person back into an earlier negotiation step.

The source project uses employee review and callback language. The public portfolio does not claim a live transfer integration or a guaranteed response time.

## Documents and delivery contact

Document handling is its own task. It requires capturing what is requested and checking the delivery contact. A contact mismatch needs a different operational outcome from a confirmed match.

The key boundary is action status: recording a request is different from sending a document. The conversation should not describe dispatch as completed simply because a request has been accepted.

The matching instructions, internal tags, document templates and dispatch implementation are private.

## Closing

The closing reflects the outcome reached and the next step that can actually be supported. A review request should end as a review request, rather than being summarized as an agreement.

## Post-call analysis

The source configuration includes analysis fields covering payment outcomes, identity problems, document-related contact information and employee follow-up. These help turn a conversation into an operational record.

The extraction prompts, complete field inventory and exact mapping to downstream destinations remain private. The local example uses a much smaller synthetic schema created for this repository.
