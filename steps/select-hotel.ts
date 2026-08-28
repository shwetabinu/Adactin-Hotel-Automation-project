import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';
//import { LoginPage } from '../pages/login.page';
//import { SearchHotelPage } from '../pages/search-hotel.page';

const { Before, Given, When, Then } = createBdd(test);


When('I select the searched hotel', async ({selectHotelPage }) => {
 await selectHotelPage.selectFirstHotelAndContinue();

});

Then('User should be navigated to select hotel page', async({selectHotelPage})=> {
 await expect(await selectHotelPage.verifyPageTitle()).toBeTruthy();

});