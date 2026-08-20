import {expect, test} from '@playwright/test';
import { Page } from '@playwright/test';

import { LoginPage } from '../../pages/login.page';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
  });
  
  test('To verify if the user is able to login with valid credentials', async () => {
    await loginPage.login(process.env.STAGE_USERNAME!, process.env.STAGE_PASSWORD!);
    const isSuccess = await loginPage.verifyLoginSuccess();
    expect(isSuccess).toBe(true);
  });

  test('To verify if the user is able to login with invalid credentials', async () => {
    await loginPage.login('invalidUsername', 'invalidPassword');
    const isSuccess = await loginPage.verifyLoginSuccess();
    expect(isSuccess).toBe(false);
  });

  test('To verify if the user is able to login with blank credentials', async () => {
    await loginPage.login('', '');
    const isUsernameBlank = await loginPage.verifyBlankUsername();
    const isPasswordBlank = await loginPage.verifyBlankPassword();
    expect(isUsernameBlank).toBe(true);
   // expect(isPasswordBlank).toBe(true);
  });

  test('To verify if the user is able to login with only password', async () => {
    await loginPage.login('', process.env.STAGE_PASSWORD!);
    const isUsernameBlank = await loginPage.verifyBlankUsername();
    expect(isUsernameBlank).toBe(true);
  });

  test('To verify if the user is able to login with only username', async () => {
    await loginPage.login(process.env.STAGE_USERNAME!, '');
    const isPasswordBlank = await loginPage.verifyBlankPassword();
    expect(isPasswordBlank).toBe(true);
  });

  test('To verify if user is able to login with user with pending email verification', async () => {
    await loginPage.login(process.env.PENDING_USERNAME!, process.env.PENDING_PASSWORD!);
    const isSuccess = await loginPage.verifyPendingEmailVerification();
    expect(isSuccess).toBe(true);
  });

});
