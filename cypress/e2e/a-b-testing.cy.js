
describe("Navigate to A/B Tesing page from main menu",()=>{
    it("Should navigate to A/B testing page",()=>{
        cy.visit("https://the-internet.herokuapp.com/abtest")
        cy.url("contain","abtest")
    })
})