import {Page, Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class BookingConfirmationPage extends BasePage{
    readonly path = '/BookingConfirmation.php'
    private readonly orderNumberInput: Locator = this.page.locator('#order_no');;
    private readonly searchHotelButton: Locator = this.page.locator('#search_hotel');
    private readonly myItineraryButton: Locator = this.page.locator('#my_itinerary');
    private readonly logoutButton: Locator = this.page.locator('#logout');
    private readonly expectedTitle: string = 'Booking Confirmation'; // Replace with the actual expected title


    async getOrderNumber(): Promise<string> {
        return await this.orderNumberInput.inputValue();
    }

    async verifyPageTitle(): Promise<boolean> {
        const actualTitle = await this.page.title();
        return actualTitle === this.expectedTitle; // Replace with the actual expected title
    }
}