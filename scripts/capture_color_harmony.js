import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots';

async function captureColorHarmony() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 1000)));

  // 1. Hero Arrival
  await page.screenshot({ path: path.join(OUT_DIR, 'harmony-01-arrival.png') });

  // 2. Frontiers + Mascot
  await page.evaluate(() => {
    document.getElementById('frontiers')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(OUT_DIR, 'harmony-02-frontiers.png') });

  // 3. Discover Metrics
  await page.evaluate(() => {
    document.getElementById('discover')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(OUT_DIR, 'harmony-03-discover.png') });

  // 4. Speakers
  await page.evaluate(() => {
    document.getElementById('speakers')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(OUT_DIR, 'harmony-04-speakers.png') });

  // 5. Tickets
  await page.evaluate(() => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(OUT_DIR, 'harmony-05-tickets.png') });

  // 6. Final Reveal
  await page.evaluate(() => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(OUT_DIR, 'harmony-06-register.png') });

  await browser.close();
  console.log('Color harmony verification captures complete!');
}

captureColorHarmony().catch(console.error);
