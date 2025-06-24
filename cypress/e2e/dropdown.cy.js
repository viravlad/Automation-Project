describe("Add tests for testing functionalities of dropdown page",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")
    })

    it("Should navigate with success to dropdown page",()=>{
        cy.url("include","dropdown")
    })

    it("Should contain the Dropdown List title",()=>{
        cy.get(".example h3").should("contain","Dropdown List")
    })

    it("Click on select and check if 3 options are available",()=>{
         cy.get('option').should("have.length",3)
    })

    it("Should select first option and get value : 1",()=>{
        cy.get('#dropdown').select("Option 1").should("have.value","1")
    })

    it("Should select second option and get value : 2",()=>{
        cy.get('#dropdown').select("Option 2").should("have.value","2")
    })

    it("Should reset the option selected after refresh",()=>{
        cy.get('#dropdown').select("Option 1")
        cy.reload()
        cy.get("#dropdown").find("option:selected").should("have.text","Please select an option")
    })
})