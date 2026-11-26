# Five Seconds to Explain the Glass

[![make.fun · u-po-pu-five-seconds-to-explain-the-glass-934d9949](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/ichwann12/u-po-pu-five-seconds-to-explain-the-glass-934d9949/rank.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/ichwann12/u-po-pu-five-seconds-to-explain-the-glass-934d9949/reward.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)

The single sentence a house cat would say in the five seconds after sweeping a glass off the table — no apology, no confession, just the most convincing excuse:

> Gravity did it. I was merely supervising the glass's scheduled descent to the floor.

84 characters, in the cat's own voice.

## How it runs

`main.ts` (Node 22, standard library only, no network, no wall clock) reads the entry text from `entry.txt` at the repo root and writes it to `answer.txt` in the output directory. The output directory is resolved in this order: `MAKEFUN_OUTPUT_DIR`, then `MAKEFUN_BOT_DIR`, then a local `./output` fallback.
