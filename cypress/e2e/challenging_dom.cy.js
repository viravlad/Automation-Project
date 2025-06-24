describe("Verify all functionalities in Challenging Dom page",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/challenging_dom")
    })
    it("Should navigate to Challenging DOM page",()=>{
        cy.url("contains","challenging_dom")
    })

    it("Should contain the correct title",()=>{
        cy.get('h3').should('contain',"Challenging DOM")
    })

    it("Verify if are button type",()=>{
        cy.get('.button').each((btn)=>{
            cy.wrap(btn).should("have.prop","tagName")
            .should('eq',"BUTTON")
        })
    })

    it("Should verify that all actions buttons are present",()=>{
        cy.get(".button").should("have.length",3)
    })

    it("The color of alert button should be red",()=>{
        cy.get(".alert").should("have.css","background-color","rgb(198, 15, 19)")
    })

    it("the color for success button should be green",()=>{
        cy.get(".success").should("have.css", "background-color","rgb(93, 164, 35)")
        cy.get('.success').click()
    })

    it("The table should be visible",()=>{
        cy.get("table").should('exist')
    })

    it("All table headers should be visible",()=>{
        cy.get("table>thead>tr>th").should("have.length",7)
    })

    it("Edit button should be present in each row ",()=>{
        cy.get("table tbody").each((row)=>{
            cy.wrap(row).contains("edit")
        })
    })

    it("Delete button should be present in each row ",()=>{
        cy.get("table tbody").each((row)=>{
            cy.wrap(row).contains("delete")
        })
    })
})