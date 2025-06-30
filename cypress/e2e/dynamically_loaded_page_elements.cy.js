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

    it("Should make visible the element after click on Start button",()=>{
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        
        cy.get('#finish h4', { timeout: 10000 }).should("be.visible").and("contain","Hello World!")
    })

    it("Should hide and not delete the element after click on Start button",()=>{
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        
        cy.get('#finish h4', { timeout: 10000 }).should("be.visible").and("contain","Hello World!")
        cy.get('button').click()
        cy.get('#finish h4', { timeout: 10000 }).should("not.be.visible")
    })

})