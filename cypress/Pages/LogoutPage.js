class LogoutPage {

menuButton = "//button[@id='react-burger-menu-btn']"
logoutButton = "//a[@id='logout_sidebar_link']"

logout(){
    cy.xpath(this.menuButton).click()
    cy.xpath(this.logoutButton).click()
}
}
export default LogoutPage