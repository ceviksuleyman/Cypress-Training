/// <reference types="cypress"/>

context("My second Test", () => {

    beforeEach("Her Testten once Url'e git", () => {
        cy.visit("/");
    });

    it("URL Test", () => {

        cy.url().should("include", "google");

        cy.url().should("eq", "https://www.google.com/");
    });

    it("Title Test", () => {

        cy.title().should("include", "Google");

        cy.title().should("eq", "Google");
    });

    it("Search Test", () => {

        cy.get("#APjFqb").type("Cypress.io{enter}");

        // get() locate
        // type() metin gonder
        // {enter} enter'a bas
    });

    it.skip("Search Test", () => {

        // it.skip() bu testi atlar
        cy.get("#APjFqb", { timeout: 5000 }).type("Cypress.io{enter}");
    });

    it.only("Search Test", () => {

        // it.only() sadece bu test calisir
        cy.get('.gb_f').click();
    });
});
