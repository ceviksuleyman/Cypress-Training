/// <reference types="cypress" />

describe("Write&Read File 1", () => {


    it("Write&File", () => {

        cy.writeFile('cypress\\e2e\\day07pom\\CypressNotes.txt','CYPRESS Notes 1\n')

        cy.writeFile('cypress\\e2e\\day07pom\\CypressNotes.txt','CYPRESS Notes 2\n',{flag:'a+'})

        cy.writeFile('cypress\\e2e\\day07pom\\CypressNotes.txt','CYPRESS Notes 3\n',{flag:'a+'})

    });
    /**
     * \n bir alt satira alir
     * {flag:'a+'} => satiri dosyaya kaydeder
     */
     

    it("Read File", () => {


        cy.readFile('cypress\\e2e\\day07pom\\CypressNotes.txt')
        .should('contain','CYPRESS Notes 2')
        .and('contain','CYPRESS Notes 3')
    })
});
