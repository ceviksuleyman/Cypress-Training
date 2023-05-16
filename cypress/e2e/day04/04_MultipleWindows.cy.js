/// <reference types="cypress" />

describe("Multiple Windows", () => {

    // 1.yontem
    it("Removing Attribute", () => {

        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.get(".example > a").invoke("removeAttr", "target").click();
        // burada 2. sayfada acilmasini engelleyip ayni pencereden çalismaya devam etmek icin
        // invoke('removeAttr','target') -> target attribute'unu kaldirdik
        // neden target bu sayfa icin buna atamasi yapilmis
    });

    // 2.yontem
    it.only("New URL", () => {


        cy.visit("https://the-internet.herokuapp.com/windows"); // bu sayfaya gittik

        cy.get(".example > a").then((element) => {
            // Click Here yazisinin locate i alindi ve yeni bir fonk olusturduk

            const newUrl = element.prop("href"); // burada Click Here yazisinin locate kismindan href tagini alip bir sabite atadik
            // Cunku href bizi 2. sayfaya goturuyor
            cy.visit(newUrl); // bu kisimda da direkt 2. sayfayi kullanmaya baslamis olduk

            // prop() -> href degerini aldik
        });

    });
});
