import LoginPage from "../Pages/LoginPage"
import LogoutPage from "../Pages/LogoutPage";

const loginpage = new LoginPage()
const logoutPage = new LogoutPage()

Cypress.Commands.add("login", () => {
    const url = "https://www.saucedemo.com/"
    const user= "standard_user"
    const pass =  "secret_sauce"

    loginpage.navigate(url)
    loginpage.enterCredentials(user,pass)
    loginpage.clickLoginButton()
})
Cypress.Commands.add("logout", function(){
    logoutPage.logout()
})