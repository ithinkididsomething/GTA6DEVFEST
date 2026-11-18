import puppeteer from 'puppeteer-core';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function checkChapter5() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 800)));

  const report = await page.evaluate(() => {
    const sec = document.getElementById('workshops');
    if (!sec) return 'NO WORKSHOPS SECTION';
    
    const leftCol = sec.querySelector('.lg\\:col-span-5');
    const rightCol = sec.querySelector('.lg\\:col-span-7');
    const cards = sec.querySelectorAll('.workshop-track-card');
    
    return {
      sectionHeight: sec.offsetHeight,
      sectionTop: sec.offsetTop,
      leftCol: {
        height: leftCol?.offsetHeight,
        top: leftCol?.offsetTop,
        position: window.getComputedStyle(leftCol).position,
      },
      rightCol: {
        height: rightCol?.offsetHeight,
        top: rightCol?.offsetTop,
        overflow: window.getComputedStyle(rightCol).overflow,
      },
      cardsCount: cards.length,
      cardHeights: Array.from(cards).map(c => c.offsetHeight),
    };
  });

  console.log('Chapter 5 Report:', JSON.stringify(report, null, 2));

  await browser.close();
}

checkChapter5().catch(console.error);
