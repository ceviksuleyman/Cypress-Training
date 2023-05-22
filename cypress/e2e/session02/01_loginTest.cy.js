/// <reference types="cypress"/>

describe("Koala Resort Hotel", () => {

    it("Login Testi", () => {

        cy.visit("https://qa-environment.koalaresorthotels.com/");

        // 1.yontem
        // cy.get('#navLogon > .nav-link').click()

        // 2.yontem
        cy.contains("Log in").click();
        // contains()  DOM'da Log in texti bul ve tikla

        cy.url().should("include", "/Account/Logon");

        // username:Manager
        // password:Manager1!
        cy.get("#UserName").type("Manager");

        //cy.get('#Password').type('Manager1!')

        //cy.get('#btnSubmit').click() // login click

        cy.get("#Password").type("Manager1!{enter}");
        
    });
});
