describe("Navigate to heroku app",()=>{

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')

    })

    it("Navigate to Heroku main page",()=>{
        cy.get('.heading').should('contain',"Welcome to the-internet")
    })
    it("Should contain sub title named 'Avilable Examples' ",()=>{
        cy.get('h2').should("contain","Available Examples")
    })

    it("Should have 44 menu items",()=>{
        cy.get("ul li").should('have.length',44)
    })

    it("All elements from menu should have a href attribute",()=>{
        cy.get('ul li a').each((e)=>{
            cy.wrap(e).should("have.attr","href")
        })
    })
})