import {Page, Locator} from '@playwright/test';
export class SideBar {
    readonly page: Page;
    readonly adactinHotelMobileAppHeading: Locator;
    readonly downloadMobileApp: Locator;
    readonly hotelAppWebServicesHeading: Locator;
    readonly clickLink: Locator;
    readonly downloadSampleTestCases: Locator;
    readonly bookOnAutomation: Locator

    constructor(page: Page) {
        this.page = page;
        this.adactinHotelMobileAppHeading = page.getByText('Adactin Hotel Mobile App');
        this.downloadMobileApp = page.locator('a:has-text("Download Mobile App")');
        this.hotelAppWebServicesHeading = page.getByText('Hotel App Web Services');
        this.clickLink = page.locator('a[href="https://adactinhotelapp.com/HotelAdactinWebServices/"]');
        this.downloadSampleTestCases = page.locator('a:has-text("Download Sample Test Cases")');
        this.bookOnAutomation = page.getByText('Book on Automation');
    }
}
