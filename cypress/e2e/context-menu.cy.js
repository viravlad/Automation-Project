describe("Create tests for context-menu",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/context_menu")
    })
    it("Should navigate to context menu page",()=>{
        cy.url('include',"context_menu")
    })

})