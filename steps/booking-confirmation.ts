import { createBdd } from 'playwright-bdd';
import { expect, test } from '../fixtures/index';


const { Before, Given, When, Then } = createBdd(test);



Then ('The booking confirmation page is displayed with the order id', async ({bookingConfirmationPage }) => {
 await expect (bookingConfirmationPage.getOrderNumber).toBeTruthy();

});

