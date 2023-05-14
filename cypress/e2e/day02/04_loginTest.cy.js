/// <reference types="cypress" />

context("Login Test", () => {

    it("Pozitif Login Test", () => {

        const username = "Manager";
        const password = "Manager1!";

        cy.visit("https://qa-environment.koalaresorthotels.com/");
        cy.contains("Log in").click();

        cy.get("#UserName").type(username);
        cy.get("#Password").type(password);
        cy.get("#btnSubmit").click();

        cy.url().should("include", "Admin/UserAdmin"); 
        // url 'Admin/UserAdmin' bunu iceriyor mu diye dogruladik
        cy.get(".username").should("contain", "manager"); 
        // aldigimiz locate 'manager' iceriyor mu diye dogruladik
    });

    it("Negatif Login Test", () => {

        const username = "Manager"
        const password = "Manager"  // yanlis password gonderiyoruz negative test

        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()

        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('#btnSubmit').click()

        cy.get('.validation-summary-errors > span').should('include.text','Try again please')
        // sisteme giremeyince uyari yazisi cikiyor ve o yazinin gorunur oldugunu dogruluyoruz

        cy.get('.validation-summary-errors > ul > li').should('include.text','Username or password is incorrect, please correct them and try again')
        // gene hatali giris yapildiginda bu yazi gorunuyor mu diye dogruladik
    });
});
