import {Page, Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class BookedItineraryPage extends BasePage {
    readonly path = '/BookedItinerary.php';
    private readonly bookedItineraryLink: Locator = this.page.locator('#my_itinerary');;
    private readonly itineraryTable: Locator = this.page.locator('#booked_form');
    private readonly cancelSelect: Locator = this.page.getByRole('button', { name: 'Cancel Selected' });
    private readonly searchHotelButton: Locator = this.page.locator('#search_hotel');
    private readonly logoutButton: Locator = this.page.locator('#logout');
    private readonly checkBox: Locator = this.page.locator('input[name="ids[]"]');
    private readonly cancelButtonRow: Locator = this.page.getByRole('button', { name: 'Cancel' + '', exact: false });
    private readonly expectedTitle: string = 'Booked Itinerary';


    async navigateToBookedItinerary() {
        await this.bookedItineraryLink.click();
    }

    async verifyPageTitle(): Promise<boolean> {
        const actualTitle = await this.page.title();
        return actualTitle === this.expectedTitle; // Replace with the actual expected title
    }
}