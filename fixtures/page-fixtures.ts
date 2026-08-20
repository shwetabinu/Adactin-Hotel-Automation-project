import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SearchHotelPage } from '../pages/search-hotel.page';
import { SelectHotelPage } from '../pages/select-hotel.page';
import { BookHotelPage } from '../pages/book-hotel.page';
import { BookingConfirmationPage } from '../pages/booking-confirmation.page';
import { BookedItineraryPage } from '../pages/booked-itinerary.page';

type PageFixtures = {
  loginPage: LoginPage;
  searchHotelPage: SearchHotelPage;
  selectHotelPage: SelectHotelPage;
  bookHotelPage: BookHotelPage;
  bookingConfirmationPage: BookingConfirmationPage;
  bookedItineraryPage: BookedItineraryPage;
}
export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  
  searchHotelPage: async ({ page }, use) => {
    await use(new SearchHotelPage(page));
  },
  selectHotelPage: async ({ page }, use) => {
    await use(new SelectHotelPage(page));
  },
  bookHotelPage: async ({ page }, use) => {
    await use(new BookHotelPage(page));
  },
  bookingConfirmationPage: async ({ page }, use) => {
    await use(new BookingConfirmationPage(page));
  },
  bookedItineraryPage: async ({ page }, use) => {
    await use(new BookedItineraryPage(page));
  },
});

