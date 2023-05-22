/// <reference types="cypress" />

describe("Allerts", () => {
    it("Js Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.wait(3000);

        cy.get(":nth-child(1) > button").click(); // alertte ok butonuna tikladi

        //! Cypress otomatik olarak Allert Tamam butonuna tiklar

        cy.get("#result").should(
            "have.text",
            "You successfully clicked an alert"
        );
        // allertte tiklandiginda cikan mesaji dogruladik text'ler esit mi seklinde
    });

    it("Accept Allert Test", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.wait(3000);

        cy.get(":nth-child(2) > button").click();

        cy.wait(3000);

        // iptal ve tamam otomatik olarak cypress tamam tiklar

        cy.get("#result").should("have.text", "You clicked: Ok");
    });

    it("Dismiss Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.wait(3000);
        cy.get(":nth-child(2) > button").click();
        //Cypress otomatik olarak TAMAM butonuna tiklayacak

        // on() -> jQuery bir fonskiyondur browser da acilan pencerelerin kontrolu icin kullanilir
        cy.on("window:confirm", () => {
            return false;
            // return true -> default olarak tikla demek
        });
        // yukardaki islemde IPTAL i tiklamis olduk
        cy.get("#result").should("have.text", "You clicked: Cancel");
    });

    it.only("Alert Text", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.wait(2000);

        cy.window().then(($windowsElement) => {

            cy.stub($windowsElement, "prompt").returns("Cypress good");

            cy.wait(2000);

            cy.get(":nth-child(3) > button").click();

        });

        cy.get("#result").should("have.text", "You entered: Cypress good");

        // Yazdirdigimiz text i dogruladik

        // window() -> pop up pencereleri kontrol ediyoruz
        // $windowsElement -> prompt a bilgi girer, acilan textbox
        // stub() -> prompt a gondermek icin kullandigimiz komut
        // returns() -> alertte istenen texti gondermek icin
    });
});
