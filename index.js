const fs = require('fs');
const puppeteer = require('puppeteer');
const speedline = require('speedline');

const USERNAME_SELECTOR = '#i0116';
const PASSWORD_SELECTOR = '#i0118';
const CLICK_BUTTON = '#idSIButton9';

const CREDS = require('./creds');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const filename = 'trace.json';
  const page = await browser.newPage();
  try {
    await page.tracing.start({path: filename, screenshots: true});
    // await page.goto('https://outlook.office.com', { waitUntil: "networkidle2" });
    await page.goto('https://outlook.office.com', { waitUntil: "networkidle2" });
    await page.type(USERNAME_SELECTOR, CREDS.username);
    await page.click(CLICK_BUTTON);
    await page.type(PASSWORD_SELECTOR, CREDS.password);
    await page.click(CLICK_BUTTON);
    await page.click(CLICK_BUTTON);
    await page.tracing.stop();
    const results = await speedline(filename);
    console.log('Speed Index value:', results.speedIndex);
  } catch (e) {
    console.error(e);
  }
  browser.close();
  fs.unlinkSync(filename);
}
run();