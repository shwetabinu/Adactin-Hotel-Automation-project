import { createBdd } from 'playwright-bdd';

import { expect, test } from '../fixtures/index';
import { defaultSearchCriteria, invalidBlankSearchCriteria, validSearchCriteria } from '../data/booking.data';
import { SearchHotelPage } from '../pages/search-hotel.page';

const { Before, Given, When, Then } = createBdd(test);


// Given('I navigate to the login page', async ({loggedOutPage }) => {
//  await loggedOutPage.goto();
// });

Given('I am already logged into Adactin Hotel application', async ({authenticatedLoginPage})=> {
 await authenticatedLoginPage.goto();

});

When('I search with valid test data',async ({searchHotelPage}) => {
  const search = validSearchCriteria();
 await searchHotelPage.searchHotel(search);
 await searchHotelPage.clickOnSubmit();

});

When('I fill the search hotel form with {string} test data',async ({searchHotelPage}, testDataType) => {
 
switch(testDataType){
    case "valid":{
        const search = validSearchCriteria();
        await searchHotelPage.searchHotel(search);
        break;
    }
    case "invalidblank":{
        const search = invalidBlankSearchCriteria();
        searchHotelPage.searchHotel(search);
        break;
    }

} 

});

When('The {string} button is clicked',async ({searchHotelPage}, buttonType) => {
 
 switch(buttonType){
    case "submit":  await searchHotelPage.clickOnSubmit();break;
    case "reset": await searchHotelPage.resetForm();break;
 }
  
});

Then('The results should be resetted', async ({searchHotelPage}) => {
    const search = defaultSearchCriteria();
    await expect(searchHotelPage.verifyResettedForm).toBe(true);
});
 



Then('Search results should be displayed',async ({searchHotelPage}) => {
 await expect(searchHotelPage.resultsTable).toBeVisible();

});

When('I search without selecting any fields', async ({searchHotelPage}) => {
    const search = invalidBlankSearchCriteria();
    searchHotelPage.searchHotel(search);
    searchHotelPage.clickOnSubmit();
});

Then('Mandatory error messages should be displayed', async ({searchHotelPage}) => {
    const errorMessage = searchHotelPage.verifyMandatoryErrorMessages();
    await expect(errorMessage).toBe(true);
});

// When('I capture the dropdown values of each field', async ({searchHotelPage}) => {
// //write code to verify dropdown values

// });

// Then('The dropdown values are as expected',async ({searchHotelPage}) => {
// //write code to verify assertions for dropdown values

// });