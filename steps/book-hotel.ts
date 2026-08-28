import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';
import { validGuestDetails } from '../data/booking.data';

const { Before, Given, When, Then } = createBdd(test);



When('I enter {string} booking details', async ({bookHotelPage },detailType) => {
    
    switch(detailType)
    {
    case "invalid credit card expiry date":{const guest = validGuestDetails();
        guest.creditCardExpiryYear='2018';
        await bookHotelPage.bookHotel(guest);break;}
    case "blank fields":break;   
    case "incomplete credit card number":{const guest = validGuestDetails();
        guest.creditCardNo="4111";
        await bookHotelPage.bookHotel(guest);break;}
    case "valid":    {const guest = validGuestDetails();
        await bookHotelPage.bookHotel(guest);break;}}
    
    }

);

When('I click on cancel button from book hotel page', async ({bookHotelPage}) => {
    await bookHotelPage.clickOnCancelButton();
});

When('I click on book now button', async ({bookHotelPage}) => {
    await bookHotelPage.clickOnBookNow();
});

Then('Mandatory error messages should be displayed in book hotel page for {string}', async ({bookHotelPage}, errorMessageType) => {
    switch(errorMessageType){
        case "blank fields": await bookHotelPage.verifyMandatoryMessages();break;
        case "invalid credit card expiry date": await bookHotelPage.verifyMandatoryErrorMessageForInvalidCCExpiry();break;
        case "incomplete credit card number": await bookHotelPage.verifyIncompleteCCError();
    }
    
});

