import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';

const { Before, Given, When, Then } = createBdd(test);



// Pulling authenticatedLoginPage logs the user in first - BookedItinerary.php is behind
// the session, and without it the app just bounces back to the login page.
Given('I am in the booked itinerary page and an existing order is present in the page', async ({ authenticatedLoginPage, bookedItineraryPage }) => {
 await bookedItineraryPage.goto();
 expect(await bookedItineraryPage.verifyPageTitle()).toBe(true);
 expect(await bookedItineraryPage.getFirstOrderId()).not.toBe('');

});



When('I select the first order for cancelation and click on its cancel button', async ({bookedItineraryPage}) => {
  await bookedItineraryPage.cancelFirstBookedOrder();
});


When('I select the order for cancelation and click on cancel button for {string}', async ({bookedItineraryPage}, orderId: string) => {
  await bookedItineraryPage.cancelBookedOrder(orderId);
});


Then('The selected booked order should be canceled', async ({bookedItineraryPage}) => {
await bookedItineraryPage.verifyLastCancelationSucceeded();
});


Then('The booked order {string} should be canceled', async ({bookedItineraryPage} , orderId) => {
await bookedItineraryPage.verifysuccessfulBookingCancelation(orderId);
});
