import { readFileSync } from 'node:fs';
import { makeEnvelope } from './basic-envelope.mjs';

const event = JSON.parse(readFileSync(new URL('./synthetic-event.json', import.meta.url)));
console.log(JSON.stringify(makeEnvelope(event), null, 2));
