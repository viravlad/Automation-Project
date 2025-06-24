
describe("Check the functionality for checkboxes",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
    })

    it("Should navigate succesfully to checkboxes page",()=>{
        cy.url("contains","checkboxes")
    })

    it("Check if the second checkbox is checked by default",()=>{
        cy.get("#checkboxes input").eq(1).should("be.checked")
    })

    it("Click on the first input and see if first input can be checked",()=>{
        cy.get("#checkboxes input").eq(0).click()
        cy.get("#checkboxes input").eq(0).should('be.checked')
    })

    it("Select first input (checked) and should be unchecked",()=>{
        cy.get('#checkboxes input').eq(0).click()
        cy.get('#checkboxes input').eq(0).should("not.be.checked")
    })

    it("Select second input (checked) and should be unchecked",()=>{
        cy.get('#checkboxes input').eq(1).click()
        cy.get('#checkboxes input').eq(1).should("not.be.checked")
    })

})