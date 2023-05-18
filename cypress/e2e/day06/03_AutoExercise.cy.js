/// <reference types="cypress" />

describe("Automation Exercise", () => {

    before(function () {

        cy.fixture("autoexercise").then(function (data) { //! dosya ismini verdik

            this.data = data;
        });
    });
    /* 
     * configuration.properties kullanimina benzer kullanim fixture autoexercise json dosyasi olusturup
     * icerisinden datalari function ile alabiliyoruz
     */

    it("Automation Exercise Login Test", function() {
        
        cy.visit(this.data.url);

        cy.get(".shop-menu > .nav > :nth-child(4) > a").click();

        // email
        cy.get('[data-qa="login-email"]').type(this.data.email);

        // password
        cy.get('[data-qa="login-password"]').type(this.data.password);

        // signin click
        cy.get('[data-qa="login-button"]').click();

        cy.get(":nth-child(10) > a").should("contain.text", "Automation");
    });
});
