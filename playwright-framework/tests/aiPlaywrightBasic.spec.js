const { test, expect } = require('@playwright/test');
import {ai} from "@zerostep/playwright"
require('dotenv').config();

test('zerostep example', async ({ page }) => {
  const userLogin = process.env.Login_email;
  const userPassword = process.env.Login_password;
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  const aiArgs = { page, test }
  await ai(`Enter "${userLogin}" as Username`, aiArgs)
  await ai(`Enter "${userPassword}" as Password`, aiArgs)
  await ai('Click Sign In', aiArgs)
  await page.waitForTimeout(8_000)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await ai('click Add button associated with "iphone X"',aiArgs)
  await ai('Go to the checkout page',aiArgs)
  await ai('click checkout button',aiArgs)
  await ai('Enter ind in input',aiArgs)
  await ai('Click India link',aiArgs)
  await ai('Select the checkbox',aiArgs)
  await ai('Click Purchase button', aiArgs)
  const bool = await ai('Confirm that success confirmation text is displayed', aiArgs)
  expect(bool).toEqual(true)

})
