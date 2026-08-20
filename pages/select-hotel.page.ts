import { Page, Locator } from '@playwright/test';

export class SelectHotelPage {
    readonly page: Page;
    readonly hotelRadioButtons: Locator;
    readonly continueButton: Locator
    readonly expectedTitle: string = 'Select Hotel'; // Replace with the actual expected title
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hotelRadioButtons = page.locator('input[name^="radiobutton_"]');
        this.continueButton = page.locator('#continue');
        this.cancelButton = page.locator('#cancel');
    }

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