import { test as base } from '@playwright/test';   
type MyFixtures = {
  // Define any custom fixtures here if needed
};

export const test = base.extend<MyFixtures>({
  // Extend the base test with custom fixtures if needed
}); 