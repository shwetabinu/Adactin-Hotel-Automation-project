import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SelectHotelPage extends BasePage{
    readonly path = '/SelectHotel.php';
    private readonly hotelRadioButtons: Locator = this.page.locator('input[name^="radiobutton_"]');;
    private readonly continueButton: Locator = this.page.locator('#continue');
    private readonly expectedTitle: string = 'Select Hotel'; // Replace with the actual expected title
    private readonly cancelButton: Locator = this.page.locator('#cancel');


    async selectFirstHotelAndContinue() {
        await this.hotelRadioButtons.first().check();
        await this.continueButton.click();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async verifyPageTitle(): Promise<boolean> {
        const actualTitle = await this.page.title();
        return actualTitle === this.expectedTitle;
    }
}