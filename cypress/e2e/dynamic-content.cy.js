describe("Create tests for dynaimic content page",()=>{

    const initialUrlList = []
    const affectedUrlList = []

    const initialTextList = []
    const affectedTextList=[]


    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/dynamic_content?with_content=static")
    })

    it("Should navigate with success on dynamic content page",()=>{
        cy.url("contains","dynamic_content")
    })

    it("Should check if the photos are changing after clicking on the link",()=>{
        cy.get("img").each((a)=>{

            initialUrlList.push(a.attr('src'))
            
        }).then(()=>{
            cy.get(':nth-child(3) > a').click()
            cy.get(':nth-child(3) > a').click()

            cy.get("img").each((img)=>{
                affectedUrlList.push(img.attr("src"))
            })

        }).then(()=>{
            expect(affectedUrlList).to.not.deep.equal(initialUrlList)
        })
       
    })

    it("Should check if the texts are changing after clicking on the link", () => {
        const initialTextList = [];
        const affectedTextList = [];
      
        // Obține textele inițiale
        cy.get(':nth-child(1) > .large-10').invoke("text").then((text1) => {
          initialTextList.push(text1);
      
          cy.get(':nth-child(4) > .large-10').invoke("text").then((text2) => {
            initialTextList.push(text2);
      
            cy.get('#content > :nth-child(7) > .large-10').invoke("text").then((text3) => {
              initialTextList.push(text3);
      
              // Click pe link de 2 ori
              cy.get(':nth-child(3) > a').click();
              cy.get(':nth-child(3) > a').click();
      
              // După ce textul se actualizează, extragem din nou
              cy.get(':nth-child(1) > .large-10').invoke("text").then((newText1) => {
                affectedTextList.push(newText1);
      
                cy.get(':nth-child(4) > .large-10').invoke("text").then((newText2) => {
                  affectedTextList.push(newText2);
      
                  cy.get('#content > :nth-child(7) > .large-10').invoke("text").then((newText3) => {
                    affectedTextList.push(newText3);
      
                    // Comparația finală
                    expect(initialTextList).to.not.deep.equal(affectedTextList);
                  });
                });
              });
            });
          });
        });
      });
      
})