import {Page, Locator} from '@playwright/test';
export class NavigationBar {
    readonly page: Page;
    readonly userNameShow: Locator;
    readonly welcomeMenu: Locator;
    readonly searchHotelLink: Locator;
    readonly bookedItineraryLink: Locator;
    readonly changePasswordLink: Locator;
    readonly logoutLink: Locator

    constructor(page: Page) {
        this.page = page;
        this.userNameShow = page.locator('#username_show');
        this.welcomeMenu = page.getByText('Welcome to Adactin', { exact: false });
        this.searchHotelLink = page.locator('a[href="SearchHotel.php"]');
        this.bookedItineraryLink = page.locator('a[href="BookedItinerary.php"]');
        this.changePasswordLink = page.locator('a[href="ChangePassword.php"]');
        this.logoutLink = page.locator('a[href="Logout.php"]');
    }


    async goToSearchHotel(): Promise<void> {
    await this.searchHotelLink.click();
    }

    async goToMyItinerary(): Promise<void> {
    await this.bookedItineraryLink.click();
    }

    async logout(): Promise<void> {
    await this.logoutLink.click();
    }

    async goToChangePassword(): Promise<void> {
    await this.logoutLink.click();
    }

     async getLoggedInUsername(): Promise<string> {
    return (await this.welcomeMenu.innerText()).trim();
    }

  async isVisible(): Promise<boolean> {
    // Nav bar only renders post-login; used by page objects/tests to
    // confirm they landed on an authenticated screen.
    return this.logoutLink.isVisible();
  }
  
}
