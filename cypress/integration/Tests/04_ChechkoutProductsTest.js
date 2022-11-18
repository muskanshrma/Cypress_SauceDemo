import AddToCart from "../../Pages/AddToCart"
import SortProducts from "../../Pages/SortProducts"
import CheckoutProducts from "../../Pages/Checkout"

const sortProducts = new SortProducts()
const addToCartPage = new AddToCart()
const checkoutProducts = new CheckoutProducts()

beforeEach(function () {

    cy.fixture('loginCredentials').then(function (data) {
        this.data = data;
    })

})

it ('Add multiple products to Cart and checkout', function(){
    cy.login()
    sortProducts.sort()
    addToCartPage.addToCart()
    checkoutProducts.checkout()
    checkoutProducts.registerDetails(this.data.fName, this.data.lName, this.data.zip)
    cy.logout()
})