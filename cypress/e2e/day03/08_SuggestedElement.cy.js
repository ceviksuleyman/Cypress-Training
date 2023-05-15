
describe("Suggested Element", () => {

    // onerilen elementler

    it("Test Case 1", () => {

        cy.visit("https://www.google.com");

        // 1.Yol
        cy.get(".gLFyf").type("Yahoo");
        cy.wait(3000)
        cy.get(".pcTkSc").contains("finance").click();

        // 2.Yol
        // cy.get('li span b').contains('mail login').click()
        // istedigim text e ulasmak icin parant dan child e giden isimlerini yazarak elementi buldum
    });

    it('Test Case 2', () => {
       
        cy.visit('http://automationpractice.pl/index.php')
        
        cy.get('#search_query_top').type('dress')

        cy.wait(4000)

        cy.get('.ac_results').contains('Blouse').click() 
        // parent locate : cy.get('.ac_results')
        // contains('Blouse') => parent'in altindan 'Blouse' yazani tikla 
        cy.wait(3000)
        cy.get('h1').should('be.visible') // h1 tagi gorunur mu diye dogruladik
   
    })
});
