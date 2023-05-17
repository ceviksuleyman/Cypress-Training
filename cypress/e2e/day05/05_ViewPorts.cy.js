/// <reference types="cypress" />

describe("ViewPorts", () => {

    // Ekrani iphone-8 boyutuna getirdik
    it("iphone-xr", () => {
        cy.visit("https://wwww.amazon.com");
        cy.viewport("iphone-xr");
        cy.screenshot();
    });

    // Ekrani MacBook-16 boyutuna getirdik
    it("MacBook-16", () => {

        cy.visit("https://www.google.com");
        cy.viewport("macbook-16");
        cy.screenshot();
    });

    // Ekran boyunutu kendi girdigimiz degerlerin boyutuna getirdik
    it.only("Custom Screen", () => {
        
        cy.visit("https://www.google.com");
        cy.viewport(500, 1000);
        cy.screenshot();
    });
});
