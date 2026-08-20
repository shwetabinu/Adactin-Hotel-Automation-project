import {Page, Locator} from '@playwright/test';

export class BookedItineraryPage {
    readonly page: Page;
    readonly bookedItineraryLink: Locator;
    readonly itineraryTable: Locator;
    readonly cancelSelect: Locator;
    readonly searchHotelButton: Locator;
    readonly logoutButton: Locator;
    readonly checkBox: Locator;
    readonly cancelButtonRow: Locator;
    readonly expectedTitle: string = 'Booked Itinerary'; // Replace with the actual expected title

    constructor(page: Page) {
        this.page = page;
        this.bookedItineraryLink = page.locator('#my_itinerary');
        this.itineraryTable = page.locator('#booked_form');
        this.cancelSelect = page.getByRole('button', { name: 'Cancel Selected' });
        this.searchHotelButton = page.locator('#search_hotel');
        this.logoutButton = page.locator('#logout');
        this.checkBox = page.locator('input[name="ids[]"]');
        this.cancelButtonRow = page.getByRole('button', { name: 'Cancel' + '', exact: false });
    }

    async navigateToBookedItinerary() {
        await this.bookedItineraryLink.click();
    }

    async verifyPageTitle(): Promise<boolean> {
        const actualTitle = await this.page.title();
        return actualTitle === this.expectedTitle; // Replace with the actual expected title
    }
}