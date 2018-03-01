const fs = require('fs');
const puppeteer = require('puppeteer');
const speedline = require('speedline');

const USERNAME_SELECTOR = 'body > grafana-app > div.main-view > div > div:nth-child(1) > div > div > div.login-inner-box > form > div:nth-child(1) > input';
const PASSWORD_SELECTOR = '#inputPassword';
const CLICK_BUTTON = 'body > grafana-app > div.main-view > div > div:nth-child(1) > div > div > div.login-inner-box > form > div.login-button-group > button';

const CREDS = require('./creds');

async function run() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });
  const filename = '/tmp/trace.json';
  const page = await browser.newPage();
  try {
    await page.tracing.start({path: filename, screenshots: true});
    await page.goto('https://demo.g.orangesys.io/', { waitUntil: "networkidle2" });
    await page.type(USERNAME_SELECTOR, CREDS.username);
    await page.type(PASSWORD_SELECTOR, CREDS.password);
    await page.click(CLICK_BUTTON);
    await page.tracing.stop();
    const results = await speedline(filename);
    console.log('e2e,target=demo-g-orangesys-io resp_time=%d', results.speedIndex);
  } catch (e) {
    console.error(e);
  }
  browser.close();
  fs.unlinkSync(filename);
}
run();