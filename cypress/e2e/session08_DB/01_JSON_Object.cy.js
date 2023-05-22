/// <reference types="cypress" />

describe("JSON OBJECT", () => {
    it("JSON OBJECT", () => {
        cy.visit("https://www.google.com/");

        const simpleObject = { key1: "value1", key2: "value2", key3: "value3" };
        console.log(simpleObject.key2); //value2
        console.log(simpleObject["key3"]); //value3

        const simpleArrayOfValue = ["one", "two", "three"];
        console.log(simpleArrayOfValue[1]); //two

        const arrayObject = [
            { key1: "value1" },
            { key2: "value2" },
            { key3: "value3" },
        ];
        console.log(arrayObject[2].key3); //value

        const dataType = { string: "metin", number: 15 };
        const body = {
            Students: [
                {
                    Fistname: "Mahmut",
                    Lastname: "CAN",
                    Job: "QA Tester",
                },
                {
                    Fistname: "Murtaza",
                    Lastname: "TAN",
                    Job: "Developer",
                },
                {
                    Fistname: "Hakan",
                    Lastname: "KAN",
                    Job: "Admin",
                },
            ],
        };
        console.log(body.Students[2].Lastname);
        console.log(body.Students[1].Fistname);
        console.log(body.Students[0].Job);
    });
});
