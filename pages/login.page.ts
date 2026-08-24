import { Page,Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { getEnvConfig } from '../config/env'; 
import { invalidCredentials } from '../data/user.data.js';

export class LoginPage extends BasePage {
  readonly path = '';
    // Define the locators for username, password, and login button
  private readonly usernameInput: Locator = this.page.locator('#username');
  private readonly passwordInput: Locator = this.page.locator('#password');
  private readonly loginButton: Locator = this.page.locator('#login');

  async login(): Promise<void>;


  // 2. Overload Signature B: Takes explicit string parameters
  async login(username: string, password: string): Promise<void>;
  
 
  async login(username?: string, password?: string): Promise<void> {
    // Logic to perform login action, e.g., filling in username and password fields and clicking the login button
    if(username && password)
    {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    }
    else
    {
    const { username, password } = getEnvConfig().defaultUser;
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    }
  }

  async loginInvalid(scenario: string){
    let username = "";
    let password = "";
    switch(scenario)
    {
      case "Blank username and password":{
        
        username = invalidCredentials[0].username;
        password = invalidCredentials[0].password;

      break;
      }
      
      case "Blank username":{
        username = invalidCredentials[2].username;
        password = invalidCredentials[2].password;

      break;
      } 
      case "Blank password":{
        username = invalidCredentials[3].username;
        password = invalidCredentials[3].password;

      break;
      } 
      case "Invalid credentials":{
        username = invalidCredentials[1].username;
        password = invalidCredentials[1].password;
        break;
      }
    }
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }


  async verifyLoginSuccess(): Promise<boolean> {
    // Logic to verify successful login, e.g., check for a specific element on the landing page
    const successIndicator = this.page.getByText('Welcome to Adactin Group of Hotels'); // Replace with actual selector
    return await successIndicator.isVisible();
  }

  async verifyLoginFailure():Promise<boolean>{
    const failureIndicator = this.page.getByText('Invalid Login details or Your Password might have expired. ');
    return await failureIndicator.isVisible();
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
