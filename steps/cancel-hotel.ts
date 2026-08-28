import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';
import { validGuestDetails, validSearchCriteria } from '../data/booking.data';

const { Before, Given, When, Then } = createBdd(test);



// Books its own order rather than relying on data already in the account.
// A cancelation is permanent, so a scenario that cancels a pre-existing booking
// consumes it and fails the next time it runs - which is fatal on CI.
// Pulling authenticatedLoginPage logs the user in first: every page below is
// behind the session, and without it the app just bounces back to the login page.
Given('I am in the booked itinerary page and an existing order is present in the page', async ({
  authenticatedLoginPage,
  searchHotelPage,
  selectHotelPage,
  bookHotelPage,
  bookingConfirmationPage,
  bookedItineraryPage,
}) => {
 await searchHotelPage.goto();
 await searchHotelPage.searchHotel(validSearchCriteria());
 await searchHotelPage.clickOnSubmit();
 await selectHotelPage.selectFirstHotelAndContinue();
 await bookHotelPage.bookHotel(validGuestDetails());
 await bookHotelPage.clickOnBookNow();
 const orderId = await bookingConfirmationPage.getOrderNumber();
 expect(orderId).not.toBe('');

 await bookedItineraryPage.goto();
 expect(await bookedItineraryPage.verifyPageTitle()).toBe(true);
 await bookedItineraryPage.verifyOrderIsListed(orderId);
 bookedItineraryPage.rememberOrder(orderId);

});



When('I select the newly booked order for cancelation and click on its cancel button', async ({bookedItineraryPage}) => {
  await bookedItineraryPage.cancelRememberedOrder();
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
