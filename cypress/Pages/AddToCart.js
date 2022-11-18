class AddProductsToCart{

    addToCartButton = "//button[contains(@class,'btn_primary')]"
    pageHeading ="//span[@class='title']"
    

    addToCart(){
    
        cy.get('.title').should('have.text', 'Products')
        cy.xpath(this.addToCartButton).click({ multiple: true })
        // let totalProducts
        // cy.xpath(this.addToCartButton).then($elements => {
        //     totalProducts = $elements.length;
        //     console.log(totalProducts)
        //     for (let i = 0; i < totalProducts; i++) {
        //         cy.xpath(this.addToCartButton).eq(i).click()
        //         cy.wait(2000)
            }}
//             )

//         }
// }
export default AddProductsToCart