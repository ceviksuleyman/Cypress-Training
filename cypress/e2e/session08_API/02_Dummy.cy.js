/// <reference types="cypress" />

describe("Dummy Assert API", () => {
    /**
                 * {
      "id": 3,
      "employee_name": "Ashton Cox",
      "employee_salary": 86000,
      "employee_age": 66,
      "profile_image": ""
    },
                 */
    it("API 01", () => {
        cy.request("https://dummy.restapiexample.com/api/v1/employees").should(
            (response) => {
                assert.equal(response.status, 200);
                assert.equal(response.body.data[2].id, 3);
                assert.equal(response.body.data[2].employee_name, "Ashton Cox");
                assert.equal(response.body.data[2].employee_salary, 86000);
                assert.equal(response.body.data[2].employee_age, 66);
                assert.equal(response.body.data[2].profile_image, "");
            }
        );
    });
});
