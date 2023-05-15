/// <reference types="cypress" />

describe("CheckBoxes", () => {


        it("Single CheckBox", () => {

            cy.visit("http://automationpractice.pl/index.php");

            // cy.get('.sf-with-ul').first().click() // bu locate'den 4 tane vardi biz burda 1.sine gidip tiklamasini istedik
            // first() : Birden fazla web element varsa birinciyi sec demek

            cy.wait(3000)
            cy.get(".sf-with-ul").eq(0).click();
            // eq() : birden fazla web element oldugunda istedigimizi secmemizi saglar
            // index ile calisir icine sitedigimiz index i seceriz
            // first() = eq(0) bunlar esittir

            cy.wait(3000)
            cy.get("#layered_category_4").should("not.be.checked");
            // should('not.be.checked') : yukarda girdigimiz web elementin tikli olmadigini dogruladi

            cy.wait(3000)
            // *** TIKLAMA ***
            cy.get("#layered_category_4").check().should("be.checked");
            // check() : tiklama yapar
            // should('be.checked') : web element tikli mi diye dogruladi

            cy.wait(3000)
            // *** TIKLAMAYI KALDIR ***
            cy.get("#layered_category_4").uncheck().should("not.be.checked");
            // uncheck() : tiklamayi kaldirir
            // sonrada tikli olmadigini dogruladik
        });
   
});
