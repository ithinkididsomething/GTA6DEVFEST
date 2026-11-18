import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots';

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', (req) => {
    failedRequests.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  console.log('=== PHASE 1: DESKTOP AUDIT (1920x1080) ===');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 2000)));

  // Initial load
  await page.screenshot({ path: path.join(OUT_DIR, '01-desktop-initial-1920.png') });

  // Scroll through sections
  const sections = [
    'arrival',
    'frontiers',
    'discover',
    'speakers',
    'workshops',
    'exhibits',
    'community',
    'tickets',
    'details',
    'register',
  ];

  for (const sec of sections) {
    const el = await page.$(`#${sec}`);
    if (el) {
      await page.evaluate((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, sec);
      await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
      await page.screenshot({ path: path.join(OUT_DIR, `sec-${sec}-1920.png`) });
    }
  }

  // Footer screenshot
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
  await page.screenshot({ path: path.join(OUT_DIR, 'sec-footer-1920.png') });

  // Test Speaker Modal
  console.log('=== TESTING SPEAKER MODAL ===');
  const speakerCard = await page.$('[data-cursor="DOSSIER"]');
  if (speakerCard) {
    await speakerCard.click();
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));
    await page.screenshot({ path: path.join(OUT_DIR, 'modal-speaker-1920.png') });
    // Press Escape
    await page.keyboard.press('Escape');
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 400)));
  }

  console.log('=== PHASE 2: RESPONSIVE VIEWPORTS AUDIT ===');
  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900 },
    { name: 'desktop-1366', width: 1366, height: 768 },
    { name: 'tablet-1024', width: 1024, height: 768 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-430', width: 430, height: 932 },
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'mobile-375', width: 375, height: 812 },
  ];

  const overflows = [];
  const brokenImages = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));
    await page.screenshot({ path: path.join(OUT_DIR, `vp-${vp.name}-hero.png`) });

    // Check for horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    if (hasOverflow) {
      overflows.push({ viewport: vp.name, scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth), innerWidth: vp.width });
    }

    // Scroll to tickets on mobile
    if (vp.width <= 768) {
      await page.evaluate(() => {
        document.getElementById('tickets')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
      await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));
      await page.screenshot({ path: path.join(OUT_DIR, `vp-${vp.name}-tickets.png`) });

      // Scroll to workshops on mobile
      await page.evaluate(() => {
        document.getElementById('workshops')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
      await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));
      await page.screenshot({ path: path.join(OUT_DIR, `vp-${vp.name}-workshops.png`) });
    }
  }

  // Check all images
  const images = await page.$$eval('img', (imgs) => {
    return imgs.map((img) => ({
      src: img.src,
      alt: img.alt,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
    }));
  });

  for (const img of images) {
    if (!img.complete || img.naturalWidth === 0) {
      brokenImages.push(img);
    }
  }

  // Check mobile navigation drawer
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  const menuBtn = await page.$('button[aria-label="Toggle navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-drawer-open-390.png') });
  }

  await browser.close();

  const auditReport = {
    consoleErrors,
    failedRequests,
    overflows,
    brokenImages,
    testedViewports: viewports.map((v) => `${v.name} (${v.width}x${v.height})`),
    totalImagesTested: images.length,
  };

  fs.writeFileSync(path.join(OUT_DIR, 'audit-results.json'), JSON.stringify(auditReport, null, 2));
  console.log('AUDIT COMPLETE! Results saved to audit-results.json');
  console.log(JSON.stringify(auditReport, null, 2));
}

runAudit().catch(console.error);
