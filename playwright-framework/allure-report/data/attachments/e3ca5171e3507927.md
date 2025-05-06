# Test info

- Name: @Web Client App login
- Location: C:\Users\anton\OneDrive\Documents\GitHub\qa-portfolio\playwright-framework\tests\E2ECart.spec.js:2:1

# Error details

```
Error: locator.waitFor: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('.ta-results') to be visible

    at C:\Users\anton\OneDrive\Documents\GitHub\qa-portfolio\playwright-framework\tests\E2ECart.spec.js:35:19
```

# Page snapshot

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart 1"
    - listitem:
      - button "Sign Out"
- text: "ZARA COAT 3 $ 31500 Quantity: 1"
- list:
  - listitem: Adidas Originals
- text: Payment Method Credit Card Paypal SEPA Invoice Personal Information Credit Card Number
- textbox: 4542 9931 9292 2293
- text: Expiry Date
- combobox:
  - option "01" [selected]
  - option "02"
  - option "03"
  - option "04"
  - option "05"
  - option "06"
  - option "07"
  - option "08"
  - option "09"
  - option "10"
  - option "11"
  - option "12"
- combobox:
  - option "01"
  - option "02"
  - option "03"
  - option "04"
  - option "05"
  - option "06"
  - option "07"
  - option "08"
  - option "09"
  - option "10"
  - option "11"
  - option "12"
  - option "13"
  - option "14"
  - option "15"
  - option "16" [selected]
  - option "17"
  - option "18"
  - option "19"
  - option "20"
  - option "21"
  - option "22"
  - option "23"
  - option "24"
  - option "25"
  - option "26"
  - option "27"
  - option "28"
  - option "29"
  - option "30"
  - option "31"
- text: CVV Code ?
- textbox
- text: Name on Card
- textbox
- text: Apply Coupon
- textbox
- button "Apply Coupon"
- text: Shipping Information antony.sagayaraj7@gmail.com
- textbox: antony.sagayaraj7@gmail.com
- textbox "Select Country": ind
- text: Place Order
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test'); 
   2 | test('@Web Client App login', async ({ page }) => {
   3 |    //js file- Login js, DashboardPage
   4 |    const email = "antony.sagayaraj7@gmail.com";
   5 |    const productName = 'ZARA COAT 3';
   6 |    const products = page.locator(".card-body");
   7 |    await page.goto("https://rahulshettyacademy.com/client");
   8 |    await page.locator("#userEmail").fill(email);
   9 |    await page.locator("#userPassword").fill("India@1947.");
  10 |    await page.locator("[value='Login']").click();
  11 |    await page.waitForLoadState('networkidle');
  12 |    await page.locator(".card-body b").first().waitFor();
  13 |    const titles = await page.locator(".card-body b").allTextContents();
  14 |    console.log(titles); 
  15 |    const count = await products.count();
  16 |    for (let i = 0; i < count; ++i) {
  17 |       if (await products.nth(i).locator("b").textContent() === productName) {
  18 |          //add to cart
  19 |          await products.nth(i).locator("text= Add To Cart").click();
  20 |          break;
  21 |       }
  22 |    }
  23 |  
  24 |    await page.locator("[routerlink*='cart']").click();
  25 |    //await page.pause();
  26 |  
  27 |    await page.locator("div li").first().waitFor();
  28 |    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  29 |    expect(bool).toBeTruthy();
  30 |    await page.locator("text=Checkout").click(); 
  31 |    //page.pause();
  32 |    await page.getByRole('textbox', { name: 'Select Country' }).fill("ind");
  33 |    //await page.locator("[placeholder*='Country']").fill("ind");
  34 |    const dropdown = page.locator(".ta-results");
> 35 |    await dropdown.waitFor();
     |                   ^ Error: locator.waitFor: Test timeout of 40000ms exceeded.
  36 |    const optionsCount = await dropdown.locator("button").count();
  37 |    for (let i = 0; i < optionsCount; ++i) {
  38 |       const text = await dropdown.locator("button").nth(i).textContent();
  39 |       if (text === " India") {
  40 |          await dropdown.locator("button").nth(i).click();
  41 |          break;
  42 |       }
  43 |    }
  44 |  
  45 |    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  46 |    await page.locator(".action__submit").click();
  47 |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  48 |    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  49 |    console.log(orderId);
  50 |  
  51 |    await page.locator("button[routerlink*='myorders']").click();
  52 |    await page.locator("tbody").waitFor();
  53 |    const rows = await page.locator("tbody tr");
  54 |  
  55 |  
  56 |    for (let i = 0; i < await rows.count(); ++i) {
  57 |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  58 |       if (orderId.includes(rowOrderId)) {
  59 |          await rows.nth(i).locator("button").first().click();
  60 |          break;
  61 |       }
  62 |    }
  63 |    const orderIdDetails = await page.locator(".col-text").textContent();
  64 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  65 |  
  66 | });
  67 |  
```