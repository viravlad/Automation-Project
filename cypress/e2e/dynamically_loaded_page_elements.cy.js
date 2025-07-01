describe("Element on page that is hidden and removed",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading")
    })

    it("Should navigate with success in the main page",()=>{
        cy.url("contains","dynamic_loading")
    })

    it("Should navigate with succes on element on page is hidden(page)",()=>{
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('.example > :nth-child(2)').should("contain","Example 1: Element on page that is hidden")
    })

    it("The element is hidden but on the page",()=>{
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get("#finish h4").should("exist")
    })

    it("Loading spinner should be visible until the text is displayed",()=>{
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        cy.get("#loading").should('be.visible')

    })

    it("Should make visible the element after click on Start button",()=>{
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        
        cy.get('#finish h4', { timeout: 10000 }).should("be.visible").and("contain","Hello World!")
    })

    it("Should navigate with success on Dynamic Loading Example 2 page",()=>{
        cy.get('[href="/dynamic_loading/2"]').click();
        cy.get('.example > :nth-child(2)').should('contain',"Example 2: Element rendered after the fact")
    })

    it("Loading spinner should be visible on DYnamic Loading page on clicking button",()=>{
        cy.get('[href="/dynamic_loading/2"]').click();
        cy.get('button').click()
        cy.get("#loading").should('be.visible')

    })

    it("Dynamic Loading Example 2",()=>{
        cy.get('[href="/dynamic_loading/2"]').click();
        cy.get("#finish h4").should("not.exist");
        cy.get('button').click()
        cy.get('#finish h4', { timeout: 10000 }).should("be.visible").and("contain","Hello World!")
    })

})