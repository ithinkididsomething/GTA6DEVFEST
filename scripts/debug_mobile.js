import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function debugMobile() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 1500)));

  const info = await page.evaluate(() => {
    const badge = document.querySelector('#arrival img');
    const badgeParent = badge?.closest('div');
    const h1 = document.querySelector('#arrival h1');
    const subtitle = h1?.nextElementSibling;
    const prompt = document.querySelector('#arrival [role="button"]');

    function getDetails(el) {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        rect: { top: rect.top, bottom: rect.bottom, height: rect.height, width: rect.width },
        opacity: style.opacity,
        visibility: style.visibility,
        display: style.display,
        transform: style.transform,
      };
    }

    return {
      windowHeight: window.innerHeight,
      badge: getDetails(badgeParent),
      h1: getDetails(h1),
      subtitle: getDetails(subtitle),
      prompt: getDetails(prompt),
    };
  });

  console.log('Mobile Hero Debug Info:', JSON.stringify(info, null, 2));

  await page.screenshot({ path: 'C:\\Users\\elect\\.gemini\\antigravity\\scratch\\devfest-indore-2026\\qa_screenshots\\debug-mobile-fresh-390.png' });

  await browser.close();
}

debugMobile().catch(console.error);
