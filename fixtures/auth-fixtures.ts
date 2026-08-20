import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { getEnvConfig } from '../config/env';
import path from 'path';


type AuthFixtures = {
  authenticatedPage: void; // signals "log in before this test runs"
};

type WorkerFixtures = {
  storageStatePath: string;
};

export const test = base.extend<AuthFixtures, WorkerFixtures>({
  storageStatePath: [async ({ browser }, use, workerInfo) => {
    const statePath = path.resolve(
      `.auth/user-${workerInfo.workerIndex}.json`
    );

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const { username, password } = getEnvConfig().defaultUser;

    await page.goto('/');
    await loginPage.login(username, password);
    await expect(page).toHaveURL(/Search/); // confirm login succeeded

    await context.storageState({ path: statePath });
    await context.close();

    await use(statePath);
  }, { scope: 'worker' }],

  authenticatedPage: [async ({ page, storageStatePath }, use) => {
    // page already has storageState applied via config below
    await use();
  }, { auto: true }],
});