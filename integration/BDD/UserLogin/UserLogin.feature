Feature:User Login

    login scenarios 

Scenario: User Enter valid Username and passsword and log in to the system
Given User navigate to the website
When User Enter a username 
|Username|
|Admin|
When User Enter a password
|Password|
|admin123|
When User click the log in button 
Then User is logged in  

Scenario: User Enter invalid Username and passsword and log in to the system
Given User navigate to the website
When User Enter a username
|Username|
|Ann|
When User Enter a password
|Password|
|admin123|
When User click the log in button 
Then User should not be able to Log in  