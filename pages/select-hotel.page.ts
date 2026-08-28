import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SelectHotelPage extends BasePage{
    readonly path = '/SelectHotel.php';
    private readonly hotelRadioButtons: Locator = this.page.locator('#radiobutton_1');
    private readonly continueButton: Locator = this.page.locator('#continue');
    private readonly expectedTitle: string = 'Adactin.com - Select Hotel'; // Replace with the actual expected title
    private readonly cancelButton: Locator = this.page.locator('#cancel');


    async selectFirstHotelAndContinue() {
        this.page.waitForLoadState("load");
        await this.hotelRadioButtons.click(); 
       
        await this.continueButton.click();
        console.log("Continue button is clicked");
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async verifyPageTitle(): Promise<boolean> {
        const actualTitle = await this.page.title();
        return actualTitle === this.expectedTitle;
    }
}