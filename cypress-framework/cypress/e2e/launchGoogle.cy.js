// Launch google URL and list all the hyperlink

describe("Launch the url" , ()=>{

  it("Launch sucessful" , ()=>{
      cy.visit("https://www.google.com/");
      const totlLinks = cy.get("a").then(($links)=> {
          const numberOfLinks = $links.length;
          cy.log(`Number of links on the page: ${numberOfLinks}`);
          
      });
      
  });

});