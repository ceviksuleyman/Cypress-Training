/// <reference types="cypress" />

describe("DragAndDrop", () => {
    /*
      https://www.npmjs.com/package/@4tw/cypress-drag-drop 
      https://github.com/4teamwork/cypress-drag-drop

      npm install --save-dev @4tw/cypress-drag-drop  -> terminal komut


      import '@4tw/cypress-drag-drop'  or  require('@4tw/cypress-drag-drop')  
    */

    it("DragAndDrop 1", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");

        cy.wait(3000);

        cy.get("#column-a") // suruklenecek web elementin locate i

            .drag("#column-b"); // web elementin sürükleneceği yerin locate i
    });

    it.only("DragAndDrop 2", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");

        const dataTransfer = new DataTransfer();

        cy.get("#column-a").trigger("dragstart", {
            dataTransfer,
        });

        cy.get("#column-b").trigger("drop", {
            dataTransfer,
        });
    });
});
