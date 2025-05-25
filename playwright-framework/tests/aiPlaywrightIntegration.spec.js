const { test, expect } = require('@playwright/test');
import {ai} from "@zerostep/playwright"

test('@Hybrid AI Test capability', async ({ page }) => {
  const aiArgs = {page,test}
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  //Blinking Text Validation
  const blinkingText = await ai("Get blinkingText in the page",aiArgs)
  expect(blinkingText).toEqual("Career Focussed QA Meetup with Rahul Shetty @Pune - Limited Seats! Book Now!")
  // Partial Link Validation
  const firstTextValue = await ai(`Split ${blinkingText} with "-" and give 0th index value`, aiArgs);
  console.log(firstTextValue)
  expect(firstTextValue).toEqual("Career Focussed QA Meetup with Rahul Shetty @Pune ")
  //Grid Validation  
  const discountPrice = await ai("What is the Discount price of Tomato",aiArgs)
  expect(discountPrice).toEqual("26")
  const price = await ai("What is the Price of Tomato",aiArgs)
  expect(price).toEqual("37")
  const diff = await ai("What is the value difference between price and Discounr price of tomato",aiArgs)
  expect(diff).toEqual("11")
  

});

