/// <reference types="cypress" />
// Navigate to the webtable and get the value of the element dynamically

 var productContent = "Pageobject";
 var productValue = "20";
describe("Verify Webtable dynamically",()=>
{
    
    it("Handling Webtable Element Dynamically", ()=>
        
    {   
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("tr td:nth-child(2)").each(($el,index,$list)=>
        {
           const productText =  $el.text()
           if(productText.includes (productContent)) 
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then((price)=>
                {
                   const priceText = price.text()
                   expect(priceText).to.equal(productValue)
                })
            }          

            
        })
            

    })

    

})