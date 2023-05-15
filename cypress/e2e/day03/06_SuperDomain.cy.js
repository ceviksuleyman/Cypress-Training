/// <reference types="cypress" />

describe("SuperDomain", () => {

    it("Test Case 1", () => {


        cy.visit('https://www.amazon.com')

        cy.wait(3000)
        

        cy.visit('https://www.cypress.io/')
        

        //cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')

        // Ayni domain icindeki ikinci sayfalara gidebilir

    });

    it('Test Case 1.5', () => {

        cy.visit('https://www.cypress.io/')

        cy.wait(3000)

        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        // onceden farkli domain deki siteye gitmiyordu artik gidiyor

    })
});