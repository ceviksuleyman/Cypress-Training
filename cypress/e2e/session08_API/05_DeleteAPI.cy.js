/// <reference types="cypress" />

describe("DELETE", () => {

    it("Delete Test", () => {

        const requestURL = "https://dummy.restapiexample.com/api/v1/delete/2";

        cy.request({

            url: requestURL,
            method: "DELETE",

        }).then((response) => {

            expect(response.status).to.equal(200);
            expect(response.body.data).to.equal("2");
            expect(response.body.status).to.equal("success");
            expect(response.body.message).to.equal("Successfully! Record has been deleted");
        });
    });
});
