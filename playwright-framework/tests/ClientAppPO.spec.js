 const {test, expect} = require('@playwright/test');
 require('dotenv').config();
 const {POManager} = require('../pageobjects/POManager');
 //Json --> String --> js object
 // stringify will allow to convert the json file into string , parse method will covert to object
 // this will help to avoid conversion issue and use the test data effiectively
 const dataSet = JSON.parse(JSON.stringify(require("../utils/ClientAppPOTestData.json")));
for (const data of dataSet){
 test(`@PageObject To Verify user able to login and add the ${data.productName} product sucessfully`, async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
    //  const username = process.env.USER_EMAIL;
    //  const password = process.env.USER_PASSWORD;
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.username,data.password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();

     const cartPage = poManager.getCartPage();
     await cartPage.VerifyProductIsDisplayed(data.productName);
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
 }

 



 

