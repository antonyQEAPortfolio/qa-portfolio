const {test , expect} = require('@playwright/test');

test("Locator Checkbox and dropdown Playwright Test", async ({browser}) =>     
    {
        
        const context = await browser.newContext();
        const page =  await context.newPage();
        const documentLink = page.locator("[href*='documents-request']"); 
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        // JS is based on promise ( 3 state - pending , rejected , fullfilled)  
        const [newPage] = await Promise.all([            
        context.waitForEvent('page'), //listen for any new page
        documentLink.click(),
        ]) // new page is opened
        const childPagetext = newPage.locator("[class*='red']");
        const text = await childPagetext.textContent();
        const arraytext = text.split("@");
        const domain = arraytext [1].split(" ")[0];
        console.log(domain);  
        await page.locator('#username').fill(domain);
        await page.pause();
        console.log(await page.locator('#username').textContent());
    
    });

