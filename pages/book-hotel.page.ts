import { Page,Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { PathLike } from 'fs';

export class BookHotelPage extends BasePage{
    readonly path = '/BookHotel.php';
    private readonly firstNameInput: Locator = this.page.locator('#first_name');;
    private readonly lastNameInput: Locator = this.page.locator('#last_name');
    private readonly addressInput: Locator = this.page.locator('#address');
    private readonly creditCardNumberInput: Locator = this.page.locator('#cc_num');
    private readonly creditCardTypeSelect: Locator = this.page.locator('#cc_type');
    private readonly expiryMonthSelect: Locator = this.page.locator('#cc_exp_month');
    private readonly expiryYearSelect: Locator = this.page.locator('#cc_exp_year');
    private readonly cvvNumberInput: Locator = this.page.locator('#cc_cvv');
    private readonly bookNowButton: Locator = this.page.locator('#book_now');
    private readonly cancelButton: Locator = this.page.locator('#cancel');
    private readonly expectedTitle: string = 'Book Hotel'; // Replace with the actual expected title


}