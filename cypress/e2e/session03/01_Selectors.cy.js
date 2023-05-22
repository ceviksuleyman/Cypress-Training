/// <reference types="cypress" />

describe("Selectors Examples", () => {

    it.skip("Css Selectors", () => {

        cy.visit("https://www.amazon.com/");

        // 1) By Yag Name
        cy.get("input");

        // 2) By id
        cy.get("#twotabsearchtextbox");

        // 3) By Class
        cy.get(".nav-search-field ");

        // 4) By Attribute name and Value
        cy.get("input[type='text']");

        // 5) By 2 Attribute -- 2 input ve id olarak 2 ayri attribut kullanarak locate aldik
        cy.get("input[type='text'][id='twotabsearchtextbox']");
    });
    /*

      npm install -D @cypress/xpath => Cypress da XPath kullanmak icin cypress.io dan plugin terminal komut
     
      require('@cypress/xpath'); => e2e.js dosyasinin icine bununla ilgili diger komutu ekliyoruz

      /// <references types="cypress-xpath"/>
      
    */

    it("xpath", () => {


        cy.visit("https://www.google.com");


        // 6) By XPath
        cy.xpath("//div/a[@aria-label='Gmail (yeni bir sekme açar)']").should("include.text","Gmail");
    });
});
