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


        cy.get('#APjFqb').type('MSI com{enter}')

    });
});
