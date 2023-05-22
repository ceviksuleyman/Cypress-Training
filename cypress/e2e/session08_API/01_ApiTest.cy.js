/// <reference types="cypress" />

describe("Simple API Test", () => {

    const requestURL = "https://jsonplaceholder.cypress.io/comments";

    it("Header Assert 1", () => {

        cy.request(requestURL)
            .its("headers")
            .its("content-type")
            .should("include", "application/json; charset=utf-8");
    });

    it("Header Assert 2", () => {
        
        cy.request({
            //url:"https://jsonplaceholder.cypress.io/comments"
            url: requestURL,
            method: "GET",
        })
            .its("headers")
            .its("content-type")
            .should("include", "application/json; charset=utf-8");
    });
});
