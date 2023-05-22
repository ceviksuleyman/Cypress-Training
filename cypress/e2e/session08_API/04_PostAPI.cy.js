/// <reference types="cypress" />

describe("POST", () => {
    const requestURL = "https://jsonplaceholder.cypress.io/comments";

    it.skip("POST Test 01", () => {
        cy.request("POST", requestURL, {
            userId: 501,
            title: "Cypress",
            body: "Javascript",
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.userId).to.equal(501);
            expect(response.body.title).to.equal("Cypress");
            expect(response.body.body).to.equal("Javascript");
        });
    });

    it("POST Test 02", () => {
        
        const requestURL = "https://dummy.restapiexample.com/api/v1/create";

        const bodyRequest = { name: "Cypress", salary: "1200", age: "23" };

        cy.request({

            url: requestURL,
            method: "POST",
            body: bodyRequest,

        }).then((response) => {

            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully! Record has been added.");
        });
    });
});
