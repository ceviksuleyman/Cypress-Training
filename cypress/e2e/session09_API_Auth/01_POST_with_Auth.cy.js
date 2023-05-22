/// <reference types="cypress" />

describe("POST with Auth TEST", () => {

    it("TEST01", () => {
        cy.request({
            url: "https://restful-booker.herokuapp.com/booking",
            method: "POST",
            auth: {
                username: "admin",
                password: "password123",
            },
            body: {
                firstname: "Cypress",
                lastname: "JavaScript",
                totalprice: 1200,
                depositpaid: true,
                bookingdates: {
                    checkin: "2023-01-01",
                    checkout: "2023-02-01",
                },
                additionalneeds: "Dinner",
            },
        }).then((response) => {

            expect(response.status).to.equal(200);
            expect(response.body.booking.additionalneeds).to.equal("Dinner");
            expect(response.body.booking.firstname).to.equal("Cypress");
            expect(response.body.booking.lastname).to.equal("JavaScript");
            expect(response.body.booking.totalprice).to.equal(1200);
            expect(response.body.booking.depositpaid).to.equal(true);
            expect(response.body.booking.bookingdates.checkin).to.equal("2023-01-01");
            expect(response.body.booking.bookingdates.checkout).to.equal("2023-02-01");
            expect(response.headers.connection).to.equal("keep-alive");
        });
    });
});
