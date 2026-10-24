// Newly authored, synthetic example. No production node implementation.
export function makeEnvelope(event) {
  if (!event || event.type !== 'demo.call.completed') {
    throw new TypeError('Expected a synthetic completed-call event.');
  }
  if (typeof event.call_id !== 'string' || !event.call_id.startsWith('demo-')) {
    throw new TypeError('Expected a demo call identifier.');
  }
  return {
    mode: 'offline_demo',
    call_id: event.call_id,
    message: 'Example received; operational processing is not implemented.',
  };
}
