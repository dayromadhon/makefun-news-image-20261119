// news-image-20261119 — "The World", a one-page newspaper front page summing up
// Thursday 19 November 2026: the ICJ's genocide ruling on Myanmar, the first
// Trump–Xi–Putin summit in Shenzhen, Anthropic's record IPO, the Crimean Bridge
// strike, the COP31 draft in Antalya, and the day's markets. The finished
// 1024x1024 image lives beside this file as entry.png; this program copies it
// to the output directory, so both runs write identical bytes.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
