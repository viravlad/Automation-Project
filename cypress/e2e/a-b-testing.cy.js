
describe("Navigate to A/B Tesing page from main menu",()=>{

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/abtest")

    })

    it("Should navigate to A/B testing page",()=>{
        cy.url("contain","abtest")
    })

    it("Should have the correct title",()=>{
        cy.get('h3').invoke('text').then((text)=>{
            expect([
                'A/B Test Control',
                'A/B Test Variation 1'
              ]).to.include(text)
        })
    })
})