/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

/*
 Faker Install
 1-) https://www.npmjs.com/package/@faker-js/faker

 2-) npm install --save-dev @faker-js/faker

 3-) import  {  faker  }  from  '@faker-js/faker'  
 class icinde import ettik bunu 1 kere yapmamız yeterli butun classlarda import olur

istersek e2e.js class inin icine require('@faker-js/faker') seklinde ekleme yapıpta import da edebiliriz
*/

describe("Using Faker", () => {
    
    it("Faker Register Test", () => {
        cy.visit("http://automationpractice.pl/index.php");

        cy.get(".login").click();

        // let,var,const javascript degiskenleri

        let email = faker.internet.email();
        cy.get("#email_create").type(email);


        cy.get("#SubmitCreate > span").click();

        // gender
        cy.get(".radio-inline").eq(0).click();


        let firstname = faker.person.firstName("male");
        cy.get("#customer_firstname").type(firstname);


        let lastname = faker.person.lastName("male");
        cy.get("#customer_lastname").type(lastname);

        let password = faker.internet.password({ length: 8 });
        cy.get('#passwd').type(password)


        cy.get('#days').select('11')
        cy.get('#months').select('8')
        cy.get('#years').select('1999')


        cy.get('#newsletter').click()
        cy.get('#optin').click()


        cy.get('#submitAccount > span').click()
        

		// *** Your account has been created. *** ASSERT
        cy.get('.alert').should('contain.text','Your account has been created.')
        cy.get('.account > span').should('include.text', firstname)
        cy.get('.account > span').should('include.text', lastname)

        cy.get('.alert').screenshot()
    });
});
