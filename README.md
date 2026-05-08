<img src="https://raw.githubusercontent.com/Rahuletto/manic/main/demo/assets/wordmark.svg" alt="Manic" width="300" />

[![Bun](https://img.shields.io/badge/runtime-Bun-black?logo=bun)](https://bun.sh)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue)](https://opensource.org/licenses/GPL-3.0)


## Plugin Template

This repository is designed to be **forked** and customized to create your own Manic plugin.

## Quick Start

```bash
git clone https://github.com/<your-org>/plugin-template
cd plugin-template
bun install
```

## Usage

```ts
import { defineConfig } from 'manicjs/config';
import { pluginTemplate } from '@manicjs/plugin-template';

export default defineConfig({
  plugins: [pluginTemplate()],
});
```

## Customize

- Rename the package in `package.json`
- Rename `pluginTemplate()` and exported types
- Replace `staticFiles`/hooks with your plugin logic
- Publish under your own npm scope

## License

GPL-3.0

Fork-ready template repository for building custom Manic plugins.
