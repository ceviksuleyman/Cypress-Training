/// <reference types="cypress"/>

describe("Koala Resort Hotel", () => {
    
    it("Login Test", () => {
        cy.visit("https://qa-environment.koalaresorthotels.com/");

        //! 1.kullanim
        // cy.contains("Log in").click();

        //! 2.kullanim
        // contains('locator','text')

        // cy.contains('a[class="nav-link"]','Log in').click()

        //cy.contains('li','Log in').click() // li tag'i icindeki text

        //! 3.kullanim
        cy.contains("log in", { matchCase: false }).click();
        // matchCase:false => buyuk kucuk harf dikkate almadan text i bulur

        //! ASSERT
        // 1) have.text
        cy.get("#navLogon > .nav-link").should("have.text", "Log in");
        // locate'de login text'i var mi dogrulamasi

        // 2) cy.url()
        cy.url().should("include", "/Account/Logon");

        // 3) be.visible
        cy.get(".row > .mb-4").should("be.visible");

        // 4) cy.title
        cy.title().should("eq", "KoalaResortHotels - Log in");

        // 5) include.text
        cy.get("#navLogon > .nav-link").should("include.text", "Log in");

        // Sayfadaki toplam link sayisi <a> taglar
        cy.get("li>a").should("have.length", 29);

        // find(): child elementleri bulmakta kullanilir cy.find() seklinde kullanilmaz
        cy.get("li").find('a[href="/Rooms/320"]').should("have.text", "Twin 2");

        // within()
        cy.get("div.categories").within(() => {
            cy.get("li")
                .find('a[href="/Rooms/318"]')
                .should("have.text", "Queen 38");
        });
        /* 
        NOT : Web Elementleri ilk olarak get ile bulacagiz. Eger get() ile bulamazsak
        find() ile deneriz. Onunla da bulamazsak within() ile deneriz 
        */


        /* 
        NOT: Locate alirken 
        cy.get()
        cy.get().find() 
        cy.get().within( () => {cy.get()})
        yapilari kullanilir
        */
    });
});
