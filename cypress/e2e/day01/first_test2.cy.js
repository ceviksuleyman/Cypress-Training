/// <reference types="cypress"/>

describe("My First Test", function () {
    // function ile () => ayni kullanim

    it("Url Test", () => {
        cy.visit("https://www.google.com/");

        cy.url().should("include", "google");
    });

    it("Title Test", function () {
        cy.visit("https://www.google.com/");
        cy.title().should("include", "Google");
        cy.title().should("include", "Goog");

        cy.title().should("eq", "Google");
    });
});
