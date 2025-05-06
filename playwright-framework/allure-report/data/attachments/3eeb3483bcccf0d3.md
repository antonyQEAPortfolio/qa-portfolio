# Test info

- Name: @API Place the order
- Location: C:\Users\anton\OneDrive\Documents\GitHub\qa-portfolio\playwright-framework\tests\createOrderThroughApi.spec.js:18:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button[routerlink*=\'myorders\']')

    at C:\Users\anton\OneDrive\Documents\GitHub\qa-portfolio\playwright-framework\tests\createOrderThroughApi.spec.js:25:55
```

# Test source

```ts
   1 | const {test, expect, request} = require('@playwright/test');
   2 | const { ApiUtils } = require('../utils/ApiUtils.js');
   3 | const loginPayLoad = {userEmail:"antony.sagayaraj7@gmail.com",userPassword:"India@1947."};
   4 | const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
   5 |  
   6 |  
   7 | let response;
   8 | test.beforeAll( async()=>
   9 | {
  10 |    const apiContext = await request.newContext();
  11 |    const apiUtils = new ApiUtils(apiContext,loginPayLoad);
  12 |    response =  await apiUtils.createOrder(orderPayLoad);
  13 |  
  14 | })
  15 |  
  16 |  
  17 | //create order is success
  18 | test('@API Place the order', async ({page})=>
  19 | { 
  20 |     page.addInitScript(value => {
  21 |  
  22 |         window.localStorage.setItem('token',value);
  23 |     }, response.token );
  24 | await page.goto("https://rahulshettyacademy.com/client");
> 25 |  await page.locator("button[routerlink*='myorders']").click();
     |                                                       ^ Error: locator.click: Target page, context or browser has been closed
  26 |  await page.locator("tbody").waitFor();
  27 | const rows = await page.locator("tbody tr");
  28 |  
  29 |  
  30 | for(let i =0; i<await rows.count(); ++i)
  31 | {
  32 |    const rowOrderId =await rows.nth(i).locator("th").textContent();
  33 |    if (response.orderId.includes(rowOrderId))
  34 |    {
  35 |        await rows.nth(i).locator("button").first().click();
  36 |        break;
  37 |    }
  38 | }
  39 | const orderIdDetails =await page.locator(".col-text").textContent();
  40 | expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
  41 |  
  42 | });
  43 |  
  44 | //Verify if order created is showing in history page
  45 | // Precondition - create order -
```