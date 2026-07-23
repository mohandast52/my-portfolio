// The intent engine. Deliberately tiny and deterministic: lowercase the query,
// short-circuit greetings, then score every intent by the summed length of the
// keywords it matched. Longest total wins; nothing matched means `fallback`.
//
// Everything goes through `getAnswer`, so swapping this for an LLM + RAG later
// needs no UI change.

import { INTENTS } from './intents';
import type { Intent } from './types';

const GREETING = /^(hi|hey|hello|yo|sup|hiya|greetings|good (morning|evening|afternoon))\b/;

/**
 * Lowercase and fold typographic apostrophes to ASCII, so "What’s his stack"
 * and "What's his stack" score identically.
 */
const normalize = (text: string): string => text.toLowerCase().replace(/[’‘`]/g, "'").trim();

export const resolve = (text: string): string => {
  const q = normalize(text ?? '');
  if (!q) return 'fallback';
  if (GREETING.test(q)) return 'greeting';

  let best = 'fallback';
  let score = 0;

  // for..of rather than reduce so TS keeps `best` narrowed to string.
  for (const id of Object.keys(INTENTS)) {
    let s = 0;
    for (const keyword of INTENTS[id].kw) {
      if (q.includes(normalize(keyword))) s += keyword.length;
    }
    // Strictly greater, so the first intent in insertion order wins ties.
    if (s > score) {
      score = s;
      best = id;
    }
  }

  return best;
};

export interface Answer {
  id: string;
  intent: Intent;
}

export const getAnswer = (query: string): Answer => {
  const id = resolve(query);
  return { id, intent: INTENTS[id] ?? INTENTS.fallback };
};
