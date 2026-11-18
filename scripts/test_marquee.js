import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testMarquee() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));

  // Scroll to Discover
  await page.evaluate(() => {
    document.getElementById('discover')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));

  // Scroll 500px down towards the right-moving marquee
  await page.evaluate(() => {
    window.scrollBy({ top: 600, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));

  await page.screenshot({ path: 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots\\marquee-right-entry.png' });

  // Scroll a bit more to see it mid-motion
  await page.evaluate(() => {
    window.scrollBy({ top: 300, behavior: 'instant' });
  });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 600)));

  await page.screenshot({ path: 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots\\marquee-right-mid.png' });

  await browser.close();
  console.log('Marquee screenshots captured!');
}

testMarquee().catch(console.error);
