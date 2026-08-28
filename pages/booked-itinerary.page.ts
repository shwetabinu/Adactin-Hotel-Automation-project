import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './base.page';

export class BookedItineraryPage extends BasePage {
    readonly path = 'BookedItinerary.php';
    private readonly bookedItineraryLink: Locator = this.page.locator('#my_itinerary');;
    private readonly itineraryTable: Locator = this.page.locator('#booked_form');
    private readonly cancelSelect: Locator = this.page.getByRole('button', { name: 'Cancel Selected' });
    private readonly searchHotelButton: Locator = this.page.locator('#search_hotel');
    private readonly logoutButton: Locator = this.page.locator('#logout');
    private readonly checkBox: Locator = this.page.locator('input[name="ids[]"]');
    // Every booked row renders its own "Cancel <orderId>" button as <input type="button" id="btn_id_<rowId>">
    private readonly cancelButtonRow: Locator = this.itineraryTable.locator('input[id^="btn_id_"]');
    private readonly pageHeading: Locator = this.itineraryTable.locator('td.login_title');
    private readonly resultMessage: Locator = this.page.locator('#search_result_error');
    private readonly expectedTitle: string = 'Booked Itinerary';
    /** Remembered between the When and Then steps of a cancelation scenario. */
    private cancelledOrderId: string | null = null;


    async navigateToBookedItinerary() {
        await this.bookedItineraryLink.click();
    }

    async verifyPageTitle(): Promise<boolean> {
        // The app serves BookedItinerary.php with the browser title "Adactin.com - Select Hotel",
        // so the on-page heading is the only reliable identifier for this page.
        const actualTitle = await this.pageHeading.innerText();
        return actualTitle.trim() === this.expectedTitle;
    }

    /** Order id of the first booking listed, read off its "Cancel <orderId>" button. */
    async getFirstOrderId(): Promise<string> {
        const firstCancelButton = this.cancelButtonRow.first();
        await expect(firstCancelButton).toBeVisible();
        const buttonLabel = await firstCancelButton.inputValue();
        return buttonLabel.trim().replace(/^Cancel\s+/, '');
    }

    async cancelBookedOrder(orderId: string){

        // The button's onclick opens a native confirm(), which blocks the click action
        // itself - the handler has to be registered up front, not awaited afterwards,
        // or the click never resolves and the dialog is never accepted.
        this.page.once('dialog', dialog => dialog.accept());
        await this.page.getByRole('button', { name: `Cancel ${orderId}` }).click();
        // Accepting the confirm navigates to BookedItinerary.php?cancel_order=<rowId>
        await this.page.waitForURL(/cancel_order=/);
        await this.waitForLoad();

    }

    /**
     * Cancels whichever booking is listed first. Preferred over naming a fixed order id:
     * a cancelation is permanent, so a hard-coded id only ever works on the first run.
     */
    async cancelFirstBookedOrder(): Promise<string> {
        const orderId = await this.getFirstOrderId();
        await this.cancelBookedOrder(orderId);
        this.cancelledOrderId = orderId;
        return orderId;
    }

    async verifyLastCancelationSucceeded(){
        if (!this.cancelledOrderId) {
            throw new Error('No order was cancelled in this scenario - cancelFirstBookedOrder() was never called.');
        }
        await this.verifysuccessfulBookingCancelation(this.cancelledOrderId);
    }

    async verifysuccessfulBookingCancelation(orderId: string){
        await expect(this.resultMessage).toContainText('The booking has been cancelled.');
        await expect(this.page.getByRole('button', { name: `Cancel ${orderId}` })).toHaveCount(0);
    }


}
