// fixtures/auth.fixture.ts
import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SearchHotelPage } from '../pages/search-hotel.page';
import { getEnvConfig } from '../config/env'; // 👈 Using your env config helper

type authFixtures = {
  authenticatedLoginPage: LoginPage;    // This will represent your automatically logged-in state
  loggedOutPage: LoginPage; 
  searchHotelPage: SearchHotelPage; // This will represent your fresh, clean login screen
};

export const authFixtures = base.extend<authFixtures>({
  // This fixture now automatically logs in the user before the test starts
  authenticatedLoginPage: async ({ page }, use) => {
    const authenticatedLoginPage = new LoginPage(page);
    const config = getEnvConfig(); // Get your credentials from your config helper

    // Execute the actual login automation steps on your page object
    await authenticatedLoginPage.goto(); // Or whatever navigation method you named
    await authenticatedLoginPage.login(config.defaultUser.username,config.defaultUser.username); // Replace with your LoginPage method names
    
    // Pass the already authenticated page object to your standard test steps
    await use(authenticatedLoginPage);
  },

  // 2. CORRECT: This fixture is configured perfectly for your login scenarios
  loggedOutPage: async ({ browser }, use) => {
    // Creates a completely clean context with no saved cookies, tokens, or storage state
    const context = await browser.newContext({ storageState: { cookies: [], origins: [] } });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    
    // Navigate to the raw login page so the test can manually type credentials
    await loginPage.goto(); 

    await use(loginPage);

    // Clean up the isolated browser context after the test finishes
    await context.close();
  },


});
