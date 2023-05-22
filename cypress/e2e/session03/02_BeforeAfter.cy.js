/// <reference types="cypress" />

describe("Before After", () => {

    before(()=>{

        cy.log("Her Test dosyasindan once bir defa calisir")
    })
    after( () => {

        cy.log('Her test dosyasindan sonra calisir')
    })
 
    beforeEach( () => {

        cy.log('Her testen once bir kere calisir')

    })
 
    afterEach( () => {

        cy.log('Her testten sonra bir kere calisir ')

    })


    it("Test Case 1", () => {


        cy.log("Test Case 1")

    });

    it("Test Case 2", () => {


        cy.log("Test Case 2")

    });
});
