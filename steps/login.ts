import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';
//import { LoginPage } from '../pages/login.page';
//import { SearchHotelPage } from '../pages/search-hotel.page';

const { Before, Given, When, Then } = createBdd(test);


Given('I navigate to the login page', async ({loggedOutPage }) => {
 await loggedOutPage.goto();
});


Then('Search Hotel Page should be displayed', async ({ loggedOutPage })  => {
  // Write code here that turns the phrase above into concrete actions
    await loggedOutPage.verifyLoginSuccess();
});


When('I Login with {string} and {string} credentials', async ({ loggedOutPage }, username, password) => {
  // Write code here that turns the phrase above into concrete actions
 
    await loggedOutPage.login(username,password);  
});

Then('Relevant {string} should be displayed', async ({ loggedOutPage }, errormessage) => {
  // Write code here that turns the phrase above into concrete actions
  switch(errormessage)
  {
    case "Enter Username":{
       const isUsernameBlank = await loggedOutPage.verifyBlankUsername();
       expect(isUsernameBlank).toBe(true);
       break;   
    }
    case "Enter Password":{
      const isPasswordBlank = await loggedOutPage.verifyBlankPassword();
       expect(isPasswordBlank).toBe(true);
       break; 
    }
    case "Invalid Login details or Your Password might have expired. ":{
       const isSuccess = await loggedOutPage.verifyLoginFailure();
       expect(isSuccess).toBe(true);
    }
  }
});

When('I Login with stored valid credentials',async ({loggedOutPage}) => {
  // Write code here that turns the phrase above into concrete actions
 await loggedOutPage.login();


});

When('I login with invalid credentials of scenario type {string}',async ({loggedOutPage}, scenarioType)=>{

await loggedOutPage.loginInvalid(scenarioType);

})





