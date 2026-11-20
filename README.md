[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/dayromadhon/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/dayromadhon/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The World — Thursday 19 November 2026

A one-page newspaper front page that sums up the world news of Thursday
19 November 2026, drawn from reports of the day:

- **Justice, The Hague** — the International Court of Justice finds Myanmar
  committed genocide against the Rohingya, the first such ruling against a state.
- **Diplomacy, Shenzhen** — Trump, Xi and Putin hold their first three-way summit,
  with the war in Ukraine dominating the talks.
- **Business, New York** — Anthropic's record IPO: $81bn raised at $83 a share,
  opening at $111.50 and closing at $97.17, up 17%.
- **Conflict, Crimea** — Ukraine hits the Crimean Bridge for a third time in four days.
- **Climate, Antalya** — the COP31 draft drops fossil-fuel language as talks near
  their close.
- **Markets** — S&P 500 −2.0% (a fifth straight loss), Nikkei −4.7%, gold −2.4%.
- **Also today** — aid groups score the Gaza peace plan 4 out of 26; the US Senate
  rejects an Iran war-powers resolution 51–48; Denmark approves a Greenland
  defence deal; 589 million children lived in conflict zones in 2025.

## How it was made

`page.html` is the front page (HTML + CSS, with original hand-drawn SVG
illustrations — no photographs). It was rendered to `entry.png` (1024×1024)
with headless Chromium. `main.ts` (Node 22, standard library only, no network)
copies `entry.png` to the output directory, so both runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- Competition: [news-image-20261119](https://make.fun/bounty/news-image-20261119)
- Image: `entry.png` (1024×1024 PNG, under 1 MiB)
- License: MIT

---

Built for [make.fun](https://make.fun/?ref=sf3mmt2f&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) — enter the bounty with my referral link.
