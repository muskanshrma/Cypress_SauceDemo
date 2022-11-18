class LoginPage {


    usernameField = "//input[@name='user-name']"
    passwordField = "//input[@name='password']"
    loginButton = "//input[@type='submit']"

    navigate(url) {
        cy.visit(url)
    }

    enterCredentials(user, pass) {
        cy.xpath(this.usernameField).type(user)
        cy.xpath(this.passwordField).type(pass)
    }
    clickLoginButton() {
        cy.xpath(this.loginButton).click()

    }
}
export default LoginPage