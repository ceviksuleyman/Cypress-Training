/// <reference types="cypress" />

describe("HoverOver", () => {

    it("Test HoverOver", () => {

        cy.visit('https://www.amazon.com/')

        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')

        //trigger() komutu ile mause'un hareketlerini secebiliyoruz 
        //yukarida mause'u dropdown menunun uzerine getirip beklettik

        cy.wait(3000)
        //cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()
        cy.contains('Change country/region.').click()  // dropdown in altindaki bir yaziya tikladik
        //cy.contains() direkt verilen text e tiklicak

        cy.wait(3000)
        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true})
        // {force: true} => select() burada tek basina secim yapamadi cypress bize bunu eklememizi onerdi

    });
});