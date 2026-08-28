import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';

const { Before, Given, When, Then } = createBdd(test);



Given('I am in the booked itinerary page and an existing order is present in the page', async ({bookedItineraryPage }) => {
 await bookedItineraryPage.goto();
 await bookedItineraryPage.verifyPageTitle();

});



When('I select the order for cancelation and click on cancel button for {string}', async ({bookedItineraryPage}, orderId: string) => {
  await bookedItineraryPage.cancelBookedOrder(orderId);
});


Then('The booked order {string} should be canceled', async ({bookedItineraryPage} , orderId) => {
await bookedItineraryPage.verifysuccessfulBookingCancelation(orderId);
});

