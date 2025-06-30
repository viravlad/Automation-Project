describe("Add tests for dynamic controls page",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/dynamic_controls")
    })
    it("Should be navigating with success on the dynamic page",()=>{
        cy.url('contains',"dynamic_controls")
    })

    it("should remove the checkbox when click on remove button and display the message : It's gone",()=>{
        cy.get('#checkbox').should('exist')
        cy.get('#checkbox-example > button').click()
        cy.get("#checkbox").should("not.exist")
        cy.get('#message').should("exist")

        })
    
    it("Should add the checkbox back when click on ADD button, also the message should not longer exist",()=>{
        cy.get('#checkbox-example > button').click()
        cy.get('#checkbox-example > button').click()
        cy.get('#checkbox-example > :nth-child(3)').should("exist")
        cy.get('#message').should("contain","It's back!")
    })

    it("SHould enable the input when click on enable button",()=>{
        cy.get('#input-example > input').should('be.disabled');
        cy.get('#input-example > button').click()
        cy.get('#input-example > input').should("be.enabled");
        cy.get('#message').should("contain","It's enabled!")
    })

    it("The loading text should be visible when click again on enable/disable button",()=>{
        cy.get('#input-example > button').click()
        cy.get('#input-example > :nth-child(3)').should('be.visible')
    })
        
    })
