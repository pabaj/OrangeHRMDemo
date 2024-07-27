import { Given,When,Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../PageObjects/LoginPage";
import DashboardPage from "../../../PageObjects/DashboardPage";

const loginPage  = new LoginPage();
const dashboardPage = new DashboardPage();

Given ('User navigate to the website',function()
{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(3000)

})

When ('User Enter a username',(dataTable)=>
{
    loginPage.getUserNameTextBox().type(dataTable.rawTable[1][0])
})

When ('User Enter a password',(dataTable)=>
{

    loginPage.getPasswordTextBox().type(dataTable.rawTable[1][0])

})

When('User click the log in button',()=>
{
    loginPage.getLoginButton().click()
    cy.wait(2000)
})


Then ('User is logged in',()=>
{
    dashboardPage.getPageHeader().should('have.text',"Dashboard")
    
})


Then ('User should not be able to Log in',()=>
    {
        loginPage.getLoginError().should('have.text',"Invalid credentials")
        
    })