class HomePage {

    getSignInLink() {
        
        return cy.get(".shop-menu > .nav > :nth-child(4) > a");
    }


}
export default HomePage
