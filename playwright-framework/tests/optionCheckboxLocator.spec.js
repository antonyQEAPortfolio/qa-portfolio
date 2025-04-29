const {test , expect} = require('@playwright/test');

test("Locator Checkbox and dropdown Playwright Test", async ({page}) =>     
    {
        
        const workTypeDropdown = page.locator("select.form-control");
        const radioButton = page.locator (".radiotextsty");
        const radioPopup = page.locator("#okayBtn");
        const checkBox = page.locator("#terms");
        const documentLink = page.locator("[href*='documents-request']");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise");
        await workTypeDropdown.selectOption("consult")
        await radioButton.nth(1).click();
        await radioPopup.click();
        console.log(await radioButton.nth(1).isChecked());
        await expect(radioButton.nth(1)).toBeChecked();
        await checkBox.click();
        await expect(checkBox).toBeChecked();
        await checkBox.uncheck();
        expect(await checkBox.isChecked()).toBeFalsy();
        await expect(documentLink).toHaveAttribute('class', 'blinkingText');
    
    });