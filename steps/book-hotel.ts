import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';
import { validGuestDetails } from '../data/booking.data';

const { Before, Given, When, Then } = createBdd(test);



Given('I enter the booking details', async ({bookHotelPage }) => {
    const guest = validGuestDetails();
    bookHotelPage.bookHotel(guest);

});

When('I click on book now button', async ({bookHotelPage}) => {
    bookHotelPage.clickOnBookNow();
});

Then('Mandatory error messages should be displayed', async ({bookHotelPage}) => {
    bookHotelPage.verifyMandatoryMessages();
});

