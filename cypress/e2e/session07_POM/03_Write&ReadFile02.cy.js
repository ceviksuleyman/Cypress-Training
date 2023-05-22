/// <reference types="cypress" />

describe("Write&Read File 2", () => {

    it("Write&File Json file", () => {

        cy.writeFile("cypress\\e2e\\day07pom\\CypressData.json", {
            id: 8739,
            name: "Jane",
            email: "jane@example.com",
        });

        cy.readFile("cypress\\e2e\\day07pom\\CypressData.json").then((user) => {

            expect(user.id).to.equal(8739);
            expect(user.name).to.equal("Jane");
            expect(user.email).to.equal("jane@example.com");
        });
        /**
         * fonksiyonu sonradan kullanabilmek icin user ismini verdik
         */
    });
});
