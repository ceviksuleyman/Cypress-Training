// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("ap_login", (email, password) => {
    cy.visit("https://automationpractice.pl/index.php");
    cy.get(".login").click();
    cy.get("#email").type(email);
    cy.get("#passwd").type(password);
    cy.get("#SubmitLogin > span").click();
});

//Amazon Arama: Girilen urun icin arama
Cypress.Commands.add("amazonSearch", (productName) => {
    cy.visit("https://www.amazon.com");
    cy.get("#twotabsearchtextbox").type(productName);
    cy.get("#nav-search-submit-button").click();
});
