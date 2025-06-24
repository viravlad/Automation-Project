import '@4tw/cypress-drag-drop';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Add necessary tests for drag an drop",()=>{
    beforeEach(()=>{
        cy.visit("https://demoqa.com/droppable")

    })
    it("Should navigate to drag and drop page",()=>{
        cy.url("include","droppable")
    })

    it("Verify that first element has id : draggable and the correct text",()=>{
        cy.get("#draggable").should("have.text","Drag me")
    })

    it("Move draggable element over droppable element", () => {
        cy.get("#draggable").drag("#droppable", { force: true })
        cy.get("#droppable > p").eq(0).should("have.text", "Dropped!")
      })
 
})