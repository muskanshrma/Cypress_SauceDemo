import AddToCart from "../../Pages/AddToCart"
import SortProducts from "../../Pages/SortProducts"

const sortProducts = new SortProducts()
const addToCartPage = new AddToCart()

it ('Add multiple products to Cart test', function(){
    cy.login()
    sortProducts.sort()
    addToCartPage.addToCart()
})