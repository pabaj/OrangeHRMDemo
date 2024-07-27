class LoginPage{

getUserNameTextBox()
{
    return cy.get('input[name="username"]')
}

getPasswordTextBox()
{
    return cy.get('input[name="password"]')
}

getLoginButton()
{
   return cy.get('button[type="submit"]')
}

getLoginError()
{
   return cy.get('div[class="orangehrm-login-error"]>div>div>p')
}







}export default LoginPage;