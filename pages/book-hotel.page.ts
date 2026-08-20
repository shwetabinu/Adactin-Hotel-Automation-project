import { Page,Locator } from '@playwright/test';

export class BookHotelPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly creditCardNumberInput: Locator;
    readonly creditCardTypeSelect: Locator;
    readonly expiryMonthSelect: Locator;
    readonly expiryYearSelect: Locator;
    readonly cvvNumberInput: Locator;
    readonly bookNowButton: Locator;
    readonly cancelButton: Locator;
    readonly expectedTitle: string = 'Book Hotel'; // Replace with the actual expected title

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.addressInput = page.locator('#address');
        this.creditCardNumberInput = page.locator('#cc_num');
        this.creditCardTypeSelect = page.locator('#cc_type');
        this.expiryMonthSelect = page.locator('#cc_exp_month');
        this.expiryYearSelect = page.locator('#cc_exp_year');
        this.cvvNumberInput = page.locator('#cc_cvv');
        this.bookNowButton = page.locator('#book_now');
        this.cancelButton = page.locator('#cancel');
    }

}