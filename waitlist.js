const {keyboard} = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const ethaddress = "dickyfatma7.eth";
const emailaddress = "dickyfatma7@gmail.com";
//Puppeter mulai
(async () => {
    const browser = await puppeteer.launch({
        headless:false
    });

//Menunggu page baru
    const page=await browser.newPage();
    await page.goto('https://kroj4l1exhu.typeform.com/beam-waitlist?typeform-source=t.co')

//Submit Eth
    await page.waitForSelector('input[type="text"]')
    await page.type('input[type="text"]', ethaddress);
    await page.keyboard.press('Enter');
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', emailaddress);
    await page.click('button[data-qa="submit-button deep-purple-submit-button"]');
})();