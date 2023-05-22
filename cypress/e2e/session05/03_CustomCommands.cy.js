/// <reference types="cypress" />

describe("Custom Command2", () => {
    it("Amazon Search", () => {
        cy.amazonSearch("Msi Laptop"); // arama yaptik burada commands.js dosyasında olusturdugumuz methoddan yaptik

        cy.get(".a-color-state").should("include.text", "Msi Laptop"); // assert arama sonucunda

        cy.get("#twotabsearchtextbox").should("have.value", "Msi Laptop");

        // html kodlarindaki arama butonundaki value = "Msi Laptop" degerini assert


        const dateNow = new Date(Date.now()).toLocaleString();

        cy.screenshot(dateNow);

        /*
          otomatik olarak sol tarafta klasor olusturuyor => screenshots
          ve screenshotlari buraya atar
          */

          // npx cypress run --spec cypress\e2e\day05\03_CustomCommands.cy.js
    });
});
