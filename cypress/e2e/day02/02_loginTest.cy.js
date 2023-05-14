/// <reference types="cypress"/>

describe("Koala Resort Hotel", () => {

    it("Login Testi", () => {

        cy.visit("https://qa-environment.koalaresorthotels.com/");

        //! 1.kullanim
        // cy.contains("Log in").click();


        //! 2.kullanim
        // contains('locator','text')

        // cy.contains('a[class="nav-link"]','Log in').click()

        //cy.contains('li','Log in').click() // li tag'i icindeki text

        //! 3.kullanim
        cy.contains('log in',{matchCase:false}).click()
        // matchCase:false => buyuk kucuk harf dikkate almadan text i bulur


        //! ASSERT
        // 1) have.text
        cy.get('#navLogon > .nav-link').should('have.text','Log in')
        // locate'de login text'i var mi dogrulamasi
    

        // 2) cy.url()
        cy.url().should("include", "/Account/Logon")


        // 3) be.visible
        cy.get('.row > .mb-4').should('be.visible')


        // 4) cy.title
        cy.title().should('eq','KoalaResortHotels - Log in')


        // 5) include.text
        cy.get('#navLogon > .nav-link').should('include.text','Log in')
    });
});
