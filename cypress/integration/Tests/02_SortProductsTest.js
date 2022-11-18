import SortProducts from "../../Pages/SortProducts"

const sortProducts = new SortProducts()

it('Sort and Filter Products', function () {
    cy.login()
    sortProducts.sort()
})
