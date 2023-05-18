describe("ReadFile&Assert", () => {
    it("Assert", () => {
        cy.readFile("./cypress/fixtures/users.json").then((userData) => {


            // *** index yapisini kullanarak 3.index'te bulunan 4.user'a assertion
            expect(userData[3].name).to.equal("Patricia Lebsack");
            expect(userData[3].username).to.equal("Karianne");
            expect(userData[3].address.street).to.equal("Hoeger Mall"); // ** inner json'a giderken address.street
            expect(userData[3].company.name).to.equal("Robel-Corkery");
        });
    });
});
