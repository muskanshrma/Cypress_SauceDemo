class SortProducts{

filterButton = "//select[@class='product_sort_container']"
filterOption = "//select[@class='product_sort_container']//option[@value='lohi']"

    sort(){
        cy.xpath(this.filterButton).select("za")
    }
}
export default SortProducts