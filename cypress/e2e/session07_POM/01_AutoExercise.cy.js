/// <reference types="cypress" />

import HomePage from "../POM/HomePage.cy";
import LoginPage from "../POM/LoginPage.cy";

describe("Automation Exercise", () => {
    
    before(function () {
        cy.fixture("autoexercise").then(function (data) {
            this.data = data;
        });
    });

    it("Automation Exercise Login Test", function () {

        const homePage = new HomePage();
        const loginPage = new LoginPage();

        cy.visit(this.data.url);

        homePage.getSignInLink().click();

        //email
        //cy.get('[data-qa="login-email"]').type(this.data.email);
        loginPage.getEmailTextBox().type(this.data.email);

        loginPage.getPasswordTextBox().type(this.data.password);

        loginPage.getSignInButton().click();

        loginPage.getLoginAssertion("Automation");

        loginPage
            .getHeader()
            .should("contain.text", "Home")
            .and("contain.text", "Products")
            .and("contain.text", "Cart")
            .and("contain.text", "Logout")
            .and("contain.text", "API Testing");
    });
});
