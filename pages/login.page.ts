import { Page,Locator } from '@playwright/test';

export class LoginPage {
    // Define the locators for username, password, and login button
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    // Initialize the page and locators for username, password, and login button
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    
    
  }

  async login(username: string, password: string): Promise<void> {
    // Logic to perform login action, e.g., filling in username and password fields and clicking the login button
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async goToLoginPage(): Promise<void> {
    //Logic to navigate to the login page, e.g., using page.goto() with the appropriate URL
    await this.page.goto(process.env.STAGE_URL!);
  }
 
  async verifyLoginSuccess(): Promise<boolean> {
    // Logic to verify successful login, e.g., check for a specific element on the landing page
    const successIndicator = this.page.getByText('Welcome to Adactin Group of Hotels'); // Replace with actual selector
    return await successIndicator.isVisible();
  }

  async verifyPendingEmailVerification(): Promise<boolean> {
    // Logic to verify pending email verification message, e.g., check for a specific element on the page
    const pendingEmailVerificationMessage = this.page.getByText('Error: Pending Email Verification'); // Replace with actual selector
    return await pendingEmailVerificationMessage.isVisible();
  }

  async verifyInvalidCredentials(): Promise<boolean> {
    // Logic to verify invalid username or password message, e.g., check for a specific element on the page
    const invalidMessage = this.page.getByText('Invalid Login details or Your Password might have expired. '); // Replace with actual selector
    return await invalidMessage.isVisible();
  }

  async verifyBlankUsername(): Promise<boolean> {
    // Logic to verify blank username or password message, e.g., check for a specific element on the page
    const blankMessage = this.page.getByText('Enter Username'); // Replace with actual selector
    return await blankMessage.isVisible();
  }

   async verifyBlankPassword(): Promise<boolean> {
    // Logic to verify blank username or password message, e.g., check for a specific element on the page
    const blankMessage = this.page.getByText('Enter Password'); // Replace with actual selector
    return await blankMessage.isVisible();
  }
}
