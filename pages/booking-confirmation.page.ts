import {Page, Locator} from '@playwright/test';

export class BookingConfirmationPage {
    readonly page: Page;
    readonly orderNumberInput: Locator;
    readonly searchHotelButton: Locator;
    readonly myItineraryButton: Locator;
    readonly logoutButton: Locator;
    readonly expectedTitle: string = 'Booking Confirmation'; // Replace with the actual expected title

    constructor(page: Page) {
        this.page = page;
        this.orderNumberInput = page.locator('#order_no');
        this.searchHotelButton = page.locator('#search_hotel');
        this.myItineraryButton = page.locator('#my_itinerary');
        this.logoutButton = page.locator('#logout');
    }

    async getOrderNumber(): Promise<string> {
        return await this.orderNumberInput.inputValue();
    }

    async verifyPageTitle(): Promise<boolean> {
        const actualTitle = await this.page.title();
        return actualTitle === this.expectedTitle; // Replace with the actual expected title
    }
}