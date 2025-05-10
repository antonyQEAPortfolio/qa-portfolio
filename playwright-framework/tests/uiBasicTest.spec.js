const {test , expect} = require('@playwright/test');
require('dotenv').config();
// async and await is combination (as javascript is asynchronous - if we dont use await keyword
//  it will execte randomly) . Only await will come into picture if we use async before function
// instead of function() , we can write () => ( anonmyous function - do not have any name)
// {browser} - its a default fixture ( global variable) from playwirght ; We have to use {}

test("Browser Context Playwright Test", async ({browser}) => 
{
    
    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    //console.log(await page.title());
    const pageTitle = await page.title();
    //await expect(page).toHaveTitle("GreenKart - veg and fruits kart");
    await expect(page).toHaveTitle(pageTitle);
    expect(pageTitle).toBe("GreenKart - veg and fruits kart");
    console.log('Page Title is', pageTitle);
});

test("Page Context Playwright Test", async ({page}) =>     
{
    const userName = page.locator('#username');
    const passWord = page.locator("[type='password']");
    const siginButton = page.locator('#signInBtn');
    const loginErrorMessage = page.locator("[style*='block']");
    const productList = page.locator("h4[class='card-title']");
    const userLogin = process.env.Login_email;
    const userPassword = process.env.Login_password;
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await userName.fill('antony'); //rahulshettyacademy
    await passWord.fill(userPassword);
    await siginButton.click();
    console.log(await loginErrorMessage.textContent());
    //await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');
    await expect(loginErrorMessage).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill(userLogin);
    await siginButton.click();
    console.log(await productList.nth(0).textContent());
});

test("Learning Page Playwright Test", async ({page}) =>     
    {
        const userName = page.locator('#userEmail');
        const passWord = page.locator("#userPassword");
        const siginButton = page.locator('#login');
        const productList = page.locator(".card-body b");
        const email = process.env.USER_EMAIL;
        const password = process.env.USER_PASSWORD;
        await page.goto("https://rahulshettyacademy.com/client");
        await userName.fill(email); //rahulshettyacademy
        await passWord.fill(password);
        await siginButton.click();
        await page.waitForLoadState('networkidle');
        console.log(await productList.allTextContents());
    })