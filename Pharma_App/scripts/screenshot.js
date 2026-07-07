import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..', 'dist');
const port = process.env.SCREENSHOT_PORT ? Number(process.env.SCREENSHOT_PORT) : 5174;

function serve() {
  const server = http.createServer((req, res) => {
    try {
      let urlPath = decodeURIComponent(req.url.split('?')[0]);
      if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
      const filePath = path.join(root, urlPath);
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const stream = fs.createReadStream(filePath);
        res.writeHead(200);
        stream.pipe(res);
      } else {
        res.writeHead(404);
        res.end('Not found');
      }
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });

  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

async function capture() {
  if (!fs.existsSync(root)) {
    console.error('dist folder not found. Run `npm run build` first.');
    process.exit(1);
  }

  const server = await serve();
  console.log('Serving', root, 'on port', port);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });

  // ensure screenshots dir
  const out = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });

  // Light theme
  await page.addInitScript(() => {
    try { localStorage.setItem('theme', 'light'); } catch (e) { }
  });
  await page.goto(`http://localhost:${port}/`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(700);
  const hero = await page.locator('.home-ref-hero');
  if (await hero.count()) {
    await hero.screenshot({ path: path.join(out, 'hero-light.png') });
    console.log('Saved screenshots/hero-light.png');
  } else {
    await page.screenshot({ path: path.join(out, 'page-light.png'), fullPage: true });
    console.log('Saved screenshots/page-light.png');
  }

  // Dark theme
  await page.addInitScript(() => {
    try { localStorage.setItem('theme', 'dark'); } catch (e) { }
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  if (await hero.count()) {
    await hero.screenshot({ path: path.join(out, 'hero-dark.png') });
    console.log('Saved screenshots/hero-dark.png');
  } else {
    await page.screenshot({ path: path.join(out, 'page-dark.png'), fullPage: true });
    console.log('Saved screenshots/page-dark.png');
  }

  await browser.close();
  server.close();
}

capture().catch((e) => { console.error(e); process.exit(1); });
