/// <reference types="cypress" />

describe("Automation Exercise", () => {

    it("Automation Exercise Login Test", () => {

        //cy.visit("https://paylinn.com/");
        cy.visit("https://www.automationexercise.com/");

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // email
        cy.get('[data-qa="login-email"]').type('automation01@gmail.com')

        // password
        cy.get('[data-qa="login-password"]').type('123456!a')

        // signin click
        cy.get('[data-qa="login-button"]').click()

        cy.get(':nth-child(10) > a').should('contain.text','Automation')
    });
});
