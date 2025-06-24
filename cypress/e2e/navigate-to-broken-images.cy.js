describe('Navigate to broken images page',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/broken_images')
    })

    it("Should navigate succesfully to broken images page",()=>{
        cy.url('contains',"broken_images")
    })

    it("should display correct the images",()=>{
        cy.get('img').each((img)=>{
            const imgUrl = img.prop('src')
            cy.request(imgUrl).then((response)=>{
                expect(response.status, `Status for ${imgUrl}`).to.eq(200)
            })
        })
        
    })
})