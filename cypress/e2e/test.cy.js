describe("Visit google for testing purpose",()=>{
    it("Access google",()=>{
        cy.visit('https://google.com')
        cy.title().should("contain","Google")
    })
})