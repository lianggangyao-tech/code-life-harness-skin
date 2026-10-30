# Code Life (代码人生) · Skin for DeepSeek Harness

> A code-world look for DeepSeek Harness: three themes, a custom four-column layout, a home page with greetings, an optional code-rain background, and Matrix-style scramble-and-decode status text while the model is working.

**Unofficial — not affiliated with DeepSeek.** Installs through Harness's official plugin mechanism, never modifies the app bundle, and can be removed at any time.

[中文](README.md) · [Changelog](CHANGELOG.md) · [Issues](../../issues)

![Lime Night home](images/home-night.png)

| Lime Night | Paper Day | Deep Space |
|---|---|---|
| ![Night](images/home-night.png) | ![Day](images/home-day.png) | ![Deep](images/home-deep.png) |

## Features

- Custom four-column layout: icon rail / sessions / conversation / instrument panel (context usage, turns, speed, cache hits, steps)
- Home page with time-aware greetings, a short "now" list, suggested actions, recent sessions
- Code rain (optional), scramble-and-decode running status, lime block cursor, terminal-style mark
- One click back to the original Harness layout; animations stop when "Reduce motion" is on

## Requirements

- macOS (Apple silicon or Intel); manual install works on other systems
- DeepSeek Harness **0.2.1-rc.3** (Harness is still a preview; compatibility updates will follow)

## Get it

**Free and open source** ([MIT](LICENSE)). Run in Terminal (macOS):

```bash
curl -fsSL https://raw.githubusercontent.com/lianggangyao-tech/code-life-harness-skin/main/get.sh | bash
```

Quit Harness (⌘Q) and reopen it. Or download `CodeLife-Harness-Skin.zip` from [Releases](../../releases/latest), unzip and double-click `install.command`. You can also hand the command to an AI agent; see [AGENTS.md](AGENTS.md).

## Privacy

Runs locally only. No network calls, no data collection.

## Source

The full source is here: `plugin/src/client.js` (all UI), `plugin/lib/index.js` (entry), `pack/` (install scripts), `tools/build.py` (build → `dist/`). Forks, issues and pull requests are welcome.

DeepSeek and DeepSeek Harness are trademarks or product names of their respective owners and are mentioned only to describe compatibility.

Published by JAYO studio. © 2026 · MIT License
