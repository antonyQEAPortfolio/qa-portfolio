 const {test, expect} = require('@playwright/test');
 require('dotenv').config();
 const {POManager} = require('../pageobjects/POManager');
 //Json --> String --> js object
 // stringify will allow to convert the json file into string , parse method will covert to object
 // this will help to avoid conversion issue and use the test data effiectively
 const dataSet = JSON.parse(JSON.stringify(require("../utils/placeOrderTestData.json")));

 test('Client App login', async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
    //  const username = process.env.USER_EMAIL;
    //  const password = process.env.USER_PASSWORD;
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(dataSet.username,dataSet.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(dataSet.productName);
     await dashboardPage.navigateToCart();

     const cartPage = poManager.getCartPage();
     await cartPage.VerifyProductIsDisplayed(dataSet.productName);
     await cartPage.Checkout();
 
     const ordersReviewPage = poManager.getOrdersReviewPage();
     await ordersReviewPage.searchCountryAndSelect("ind","India");
     const orderId = await ordersReviewPage.SubmitAndGetOrderId();
     console.log(orderId);
     await dashboardPage.navigateToOrders();
     const ordersHistoryPage = poManager.getOrdersHistoryPage();
     await ordersHistoryPage.searchOrderAndSelect(orderId);
     expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();    

 });
 

 



 

