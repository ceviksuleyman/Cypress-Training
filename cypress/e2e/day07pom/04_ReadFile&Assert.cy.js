describe("ReadFile&Assert", () => {

    it("Assert", () => {

        cy.readFile("./cypress/fixtures/users.json").then((userData) => {
            
            // fixtures klasorunun altindaki users.json dosyasini oku ve bir fonk olustur

            expect(userData[3].name).to.equal("Patricia Lebsack"); // userData fonk users.json dosyasindaki indexi 3 olan name i alip equal içine yazilan ile karsilastirip eşit oldugunu dogruluyor
            expect(userData[3].username).to.equal("Karianne");
            expect(userData[3].address.street).to.equal("Hoeger Mall");  // bunlar JSon formatinda oldugu icin pojo class gibi altina indim  address.street
            expect(userData[3].company.name).to.equal("Robel-Corkery");
        });
    });
});
