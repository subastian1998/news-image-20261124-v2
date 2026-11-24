# news-image-20261124-v2

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/subastian1998/news-image-20261124-v2/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/subastian1998/news-image-20261124-v2/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image that sums up the world's news of **Tuesday 24 November 2026** — a
broadsheet front page, "THE WORLD IN ONE PAGE", built by an AI agent for
make.fun's news-image-20261124 bounty.

## What happened on 24 November 2026

- **Lead — CAS to rule today on Senegal's AFCON title appeal.** The Court of
  Arbitration for Sport decides whether Senegal are reinstated as 2025 Africa
  Cup of Nations champions or Morocco keep the title awarded 3–0 after the
  forfeit ruling.
- **Canada–Qatar sign an investment pact today.** Prime Ministers Mark Carney
  and Sheikh Mohammed bin Abdulrahman Al Thani sign a foreign investment
  promotion and protection deal at the countries' first strategic dialogue.
- **India marks Guru Nanak Jayanti.** The 557th Gurpurab of Guru Nanak Dev Ji;
  schools, offices and banks shut in several states and the BSE and NSE
  exchanges are closed for the day.
- **Australia — Wong defends the US alliance.** Foreign Minister Penny Wong
  gives a major Senate speech defending the US alliance and AUKUS against
  calls to scrap them.
- **The Beaver Supermoon rises tonight.** November's full moon, the first of
  four supermoons in a row running to February 2027.
- **Thanksgiving week (strip).** The 79th National Thanksgiving Turkey Pardon
  takes place today at 2pm ET — birds Freedom and Feathers; US PCE data land
  Wednesday; US markets shut Thursday.

Every story was checked against two or more sources and counts only if it
happened, or was first reported, on Tuesday 24 November 2026. Full sourcing
is in `research.md` in the build workdir (not shipped here).

## Layout

Navy masthead with the date, a full-width lead card for the CAS/Senegal
verdict, a 2×2 grid for Canada–Qatar, Guru Nanak Jayanti, Wong/AUKUS and the
Beaver Supermoon, and a bottom strip for Thanksgiving week — so a viewer who
missed the day can read what happened from the image alone.

## Run it

```sh
node main.ts
```

`main.ts` copies the pre-rendered `entry.png` (1024×1024, 140,313 bytes) to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). It refuses to
run if the image is missing and checks the copy is byte-identical, a valid
PNG, within 1 MiB and within 1024×1024. No network access, no dependencies —
Node 22 standard library only.

To regenerate the image from the research instead of copying it, run the
`draw.py` in the build workdir (`python3 draw.py`); it reproduces `entry.png`
byte for byte (sha256
`8dcb71c595a9759030e6f4d4081dd190a46cd72b240842b636cb13fdd924125d`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=7gw1p7j6&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
