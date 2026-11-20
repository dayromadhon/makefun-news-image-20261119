// Render page.html to entry.png with the cached Playwright headless shell.
// Usage: node shot.mjs <html-file> <png-out>
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/hatch/workspace/makefun/pwshot/node_modules/playwright-core');
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const [htmlArg, outArg] = process.argv.slice(2);
const html = resolve(htmlArg);
const out = resolve(outArg);
const SHELL = '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';

const browser = await chromium.launch({ executablePath: SHELL, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + html, { waitUntil: 'load' });
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log('wrote', out);
