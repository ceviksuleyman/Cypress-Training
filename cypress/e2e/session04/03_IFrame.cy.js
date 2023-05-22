/// <reference types="cypress" />

describe("IFrame", () => {
    it("IFrame Test", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        /*
          1) plugin

          https://www.npmjs.com/package/cypress-iframe
          https://gitlab.com/kgroat/cypress-iframe

          npm install -D cypress-iframe  => terminal komut

          2) Import Plugin

          import 'cypress-iframe';
          require('cypress-iframe');

          bu iki komuttan birini de (support dosyasindaki e2e.js dosyasinin icine yapistiriyoruz 

          3) Bu islemlerden sonra cy.frameLoaded() ve cy.iframe() komutlarini kullanabilecegiz
          
          bu islemleri yapmadan bu komutlar kullanilamaz !
        */

        cy.frameLoaded("#mce_0_ifr"); // cy.frameLoaded()-> burada IFrame'in yerini tanimladik
        // driver.switchTo.frame('#mce_0_ifr') -> Selenium

        cy.iframe().find("p").clear(); // iframe icindeki yaziyi sildik
        // cy.iframe() -> iframe e git
        // find('p') -> p tagini bul
        // clear() -> metni temizle

        cy.iframe().find("p").type("Cypress was here"); // icine gondermek istedigimiz yaziyi gonderdik
        //find() icine child elementin locate'i yaziliyor
        //cy.iframe().find('p') iframe in altindaki child tag a ulasmis olduk

        cy.get(".large-4 > div > a")
            .should("contain.text", "Elemental Selenium")
            .click();
    });
});
