class LoginPage {

    getEmailTextBox() {

        return cy.get('[data-qa="login-email"]');
    }

    getPasswordTextBox() {

        return cy.get('[data-qa="login-password"]');
    }

    getSignInButton() {

        return cy.get('[data-qa="login-button"]');
    }

    getLoginAssertion(text) {

        return cy
            .get(":nth-child(10) > a")
            .should("contain.text", text);
    }
    getHeader(){

        return cy.get('.shop-menu')
    }
}
export default LoginPage;
