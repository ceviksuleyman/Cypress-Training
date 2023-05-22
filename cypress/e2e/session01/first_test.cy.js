/// <reference types="cypress"/>

describe("My First Test", () => {
    // describe test tanimladim describe ve it mocha'dan

    it("Url Test", () => {
        cy.visit("https://www.google.com/");
        // cy.visit(URL) => url'e git

        cy.url().should("include", "google");
    });

    it("Title Test", () => {
        cy.visit("https://www.google.com/");
        cy.title().should("include", "Google");
        cy.title().should("include", "Goog");
        //title sayfanin basligini alir

        cy.title().should("eq", "Google");
    });
});
