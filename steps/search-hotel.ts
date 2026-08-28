import { createBdd } from 'playwright-bdd';

import { expect, test } from '../fixtures/index';
import { defaultSearchCriteria, invalidBlankSearchCriteria, pastCheckoutDate, sameCheckInCheckOut, validSearchCriteria } from '../data/booking.data';
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

await searchHotelPage.goto();
switch(testDataType){
    case "valid":{
        const search = validSearchCriteria();
        await searchHotelPage.searchHotel(search);
        break;
    }
    case "blank fields":{
        const search = invalidBlankSearchCriteria();
        await searchHotelPage.searchHotel(search);
        break;

    }
    case "mandatory":{
        await searchHotelPage.searchHotelMandatory();
        break;

    }
    case "same checkin and check out":{
        const search = sameCheckInCheckOut();
        await searchHotelPage.searchHotel(search);
        break;
    }
    case "past checkout":{
        const search = pastCheckoutDate();
        await searchHotelPage.searchHotel(search);
        break;
    }
    default:
        throw new Error(`Unknown test data type: ${testDataType}`);

}

});

When('The {string} button is clicked',async ({searchHotelPage}, buttonType) => {
 
 switch(buttonType){
    case "search":  await searchHotelPage.clickOnSubmit();break;
    case "reset": await searchHotelPage.resetForm();break;
 }
  
});

Then('The results should be resetted', async ({searchHotelPage}) => {
    const search = defaultSearchCriteria();

   expect(await searchHotelPage.verifyResettedForm(search)).toBe(true);
});
 

Then('Search results should be displayed',async ({searchHotelPage}) => {
 await expect(searchHotelPage.resultsTable).toBeVisible();

});

Then('Mandatory error message should be displayed for {string}', async ({searchHotelPage}, errorCondition) => {
    let errorMessage;
    switch(errorCondition){
    case "same checkin and check out": {
         errorMessage = await searchHotelPage.verifyMandatoryErrorMessageForSameCheckinCheckout(); break;}
    case "past checkout": {  errorMessage = await searchHotelPage.verifyMandatoryErrorMessageForPastCheckout();break;}
    case "blank fields":  { errorMessage = await searchHotelPage.verifyMandatoryErrorMessages();break;}
    default:
        throw new Error(`Unknown error condition: ${errorCondition}`);
 }
 expect(errorMessage).toBe(true);
}
);


When('I search without selecting any fields', async ({searchHotelPage}) => {
    const search = invalidBlankSearchCriteria();
    searchHotelPage.searchHotel(search);
    searchHotelPage.clickOnSubmit();
});

// Then('Mandatory error messages should be displayed in search hotel page', async ({searchHotelPage}) => {
//     const errorMessage = await searchHotelPage.verifyMandatoryErrorMessages();
//     expect(errorMessage).toBe(true);
// });
