/// <reference types="cypress" />

describe("CheckBoxes", () => {


    it("Single CheckBox", () => {

        cy.visit("http://automationpractice.pl/index.php");

        // cy.get('.sf-with-ul').first().click()
        // locate 4 element verdi ilkini almak icin first() kullandik

        cy.get(".sf-with-ul").eq(0).click({ wait: 4000 });
        // first() = eq(0)

        cy.get("#layered_category_4").should("not.be.checked", { wait: 3000 });
        // should('not.be.checked') : yukarda girdigimiz web elementin tikli olmadigini dogruladi
        cy.wait(3000);

        // *** TIKLAMA ***
        cy.get("#layered_category_4")
            .check()
            .should("be.checked", { wait: 3000 });
        // check() : tiklama yapar
        // should('be.checked') : web element tikli mi diye dogruladi
        cy.wait(3000);

        // *** TIKLAMAYI KALDIR ***
        cy.get("#layered_category_4")
            .uncheck()
            .should("not.be.checked", { wait: 3000 });
        // uncheck() : tiklamayi kaldirir
        // sonrada tikli olmadigini dogruladik
    });

    it("All CheckBoxes 1", () => {

        cy.visit("http://automationpractice.pl/index.php");

        cy.get(".sf-with-ul").eq(0).click();

        // Butun checkbox'lara TIKLA
        cy.get("input[type='checkbox']").check(); // bu locate de 19 tane checkbox var

        cy.get(3000);

        // Butun checkbox'lara TIKLAMAYI KALDIR
        cy.get("input[type='checkbox']").uncheck();
    });

    it("All CheckBoxes 2", () => {


        cy.visit("http://automationpractice.pl/index.php");

        cy.get(".sf-with-ul").eq(0).click();

        // 1. kutuya tikla ve dogrula
        cy.get("input[type='checkbox']").eq(0).check().should("be.checked");

        // 5.kutuya tikla ve dogrula
        cy.get("input[type='checkbox']").eq(4).check().should("be.checked");

        // 12.kutuya tikla ve dogrula
        cy.get("input[type='checkbox']").eq(11).check().should("be.checked");


        // *** TIKLAMAYI KALDIR *** ve Dogrula
        cy.get("input[type='checkbox']")
            .eq(0)
            .uncheck()
            .should("not.be.checked");

        // NOT : uncheck(): Tiklamayi kaldirir
        // should('not.be.checked') : tiklamanin kaldirildigini ASSERT eder
    });

    it.only("All CheckBoxes 3", () => {

        cy.visit("http://automationpractice.pl/index.php");

        cy.get(".sf-with-ul").eq(0).click();

        cy.get("input[type='checkbox']").click({ multiple: true });
        // bu locate 19 tane checkbox var hepsine tek seferde tiklamasini istedigimiz icin
        // Cypress "{ multiple: true }" bunu yazmami istedi

        /*
        click() : tek bir web elemente tiklar
        click({ multiple: true }) : bu sekilde tum web elemntlere tiklar
        */

        cy.get("input[type='checkbox']")
            .first()
            .parent()
            .should("have.class", "checked");
        // 1. chechkbox a tikladik bunun parent class'i 'checked' iceriyor mu ?

        cy.get("input[type='checkbox']")
            .parent()
            .should("have.class", "checked");
        // 19 checkbox tiklanmis mi diye assert etti
    });
});
