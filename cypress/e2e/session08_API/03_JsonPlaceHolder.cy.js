/// <reference types="cypress" />

describe("JsonPlaceHolder", () => {
    const requestURL = "https://jsonplaceholder.cypress.io/comments";
    /**
     * {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
     */

    it("API Test 01 Assert", () => {

        cy.request(requestURL).should((response) => {

            assert.equal(response.status, 200);
            assert.equal(response.body[1].postId,1);
            assert.equal(response.body[1].id,2);
            assert.equal(response.body[1].name,"quo vero reiciendis velit similique earum");
            assert.equal(response.body[1].email,"Jayne_Kuhic@sydney.com");
        
        });
    });

    it("API Test 02 Expect", () => {

        cy.request(requestURL).should((response) => {

            expect(response.status).to.equal(200)
            expect(response.body[1].postId).to.equal(1)
            expect(response.body[1].id).to.equal(2)
            expect(response.body[1].name).to.equal("quo vero reiciendis velit similique earum")
            expect(response.body[1].email).to.equal("Jayne_Kuhic@sydney.com")

        });
    });

    it("API Test 03", () => {

        cy.request({

            url:requestURL,
            method:"GET",

        }).should((response)=>{

            expect(response.status).to.equal(200)
            expect(response.body[1].postId).to.equal(1)
            expect(response.body[1].id).to.equal(2)
            expect(response.body[1].name).to.equal("quo vero reiciendis velit similique earum")
            expect(response.body[1].email).to.equal("Jayne_Kuhic@sydney.com")
        })
        
    });
});
