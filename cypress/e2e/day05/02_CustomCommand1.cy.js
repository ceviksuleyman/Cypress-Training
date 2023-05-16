/// <reference types="cypress" />

describe("Custom Command1", () => {

    it.skip("Positive Login", () => {
        cy.visit("https://automationpractice.pl/index.php");
        cy.get(".login").click();
        cy.get("#email").type("cypresstest@gmail.com");
        cy.get("#passwd").type("Sc1234!");
        cy.get("#SubmitLogin > span").click();

        cy.wait(3000)
        cy.get(".account > span").should("have.text", "Cypress Cypress"); // login oldugumuzu dogruladik
    });

    /*
      Seleniumda ki gibi Reusable Metotlar oluşturduk bunu da support klasorunun altindaki
      commands.js dosyasinda yaptik
      Asagidaki Positive Login with Custom testi de buna örnek oldu
   */

    it("Positive Login with Custom", () => {
        cy.ap_login("cypresstest@gmail.com", "Sc1234!");

        // cy.ap_login -> commands.js dosyasinda olusturdugumuz fonksiyon

        cy.wait(3000)
        cy.get(".account > span").should("have.text", "Cypress Cypress");
    });

    it("Negative Login with Custom", () => {

        cy.ap_login("cypresstest@gmail.com", "Sc1234!aa"); // dogru mail yanlis password girdik ve giris yapamadigimizi dogruluyoruz

        cy.wait(3000)
        cy.get("ol > li").should("have.text", "Authentication failed.");
    });
});
