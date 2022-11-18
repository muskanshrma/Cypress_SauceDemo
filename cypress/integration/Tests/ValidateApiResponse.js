describe('Validate API response',()=>{
    it('GET', ()=>{
    
            cy.request({
                method: 'GET',
                url: 'https://www.saucedemo.com/',
            }).then((response) => {
                expect(response.status).to.eq(200)

    })
})
})