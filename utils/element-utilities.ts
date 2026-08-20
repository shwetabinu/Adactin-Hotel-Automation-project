import { test, expect } from '@playwright/test';

export class ElementUtilities {
  async verifyDropDownFields(page: any, dropdownSelectors: string[]): Promise<void> {
    for (const selector of dropdownSelectors) {
      const dropdown = page.locator(selector);
      await expect(dropdown).toBeVisible();
      await expect(dropdown).toBeEnabled();
    }
  }


}