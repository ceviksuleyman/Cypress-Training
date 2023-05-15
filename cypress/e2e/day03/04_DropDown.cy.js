/// <reference types="cypress" />

describe("Dropdown Test", () => {


    it("Test DD", () => {

        cy.visit("https://the-internet.herokuapp.com/dropdown");

        cy.wait(3000)

        cy.get('#dropdown').select('Option 1').should('have.value',1)

        cy.wait(3000)

        cy.get('#dropdown').select('Option 2').should('have.value',2)


        cy.wait(3000)
        cy.get('#dropdown').select(1).should('have.value',1) // index ile secim 0 dan basliyor

        // select() fonksiyonunu kullaniyoruz click yapmaya gerek kalmiyor
    });
});
