describe("Navigate to heroku app",()=>{
    it("Navigate to Heroku main page",()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('.heading').should('contain',"Welcome to the-internet")
    })
    it("Should contain sub title named 'Avilable Examples' ",()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('h2').should("contain","Available Examples")
    })
})