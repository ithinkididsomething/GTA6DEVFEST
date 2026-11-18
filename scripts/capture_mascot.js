import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureMascot() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    document.getElementById('frontiers')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 1000)));
  await page.screenshot({ path: 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots\\mascot-chapter02-desktop.png' });

  // Mobile
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    document.getElementById('frontiers')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 1000)));
  await page.screenshot({ path: 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots\\mascot-chapter02-mobile.png' });

  await browser.close();
}

captureMascot().catch(console.error);
