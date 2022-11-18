class CheckoutProducts{

shoppingCartButton = "//a[@class='shopping_cart_link']"
checkoutButton = "//button[@name='checkout']"
firstName = "//input[@name='firstName']"
lastName = "//input[@name='lastName']"
zipCode = "//input[@name='postalCode']"
continueButton ="//input[@name='continue']"
finishButton = "//button[@name='finish']"
backHomeButton = "//button[@name='back-to-products']"

    checkout(){
    cy.xpath(this.shoppingCartButton).click()
    cy.xpath(this.checkoutButton).click()
    }
    registerDetails(f, l, z){
        cy.xpath(this.firstName).type(f)
        cy.xpath(this.lastName).type(l)
        cy.xpath(this.zipCode).type(z)
        cy.xpath(this.continueButton).click()
        cy.xpath(this.finishButton).click()
        cy.xpath(this.backHomeButton).click()
    }
}
export default CheckoutProducts