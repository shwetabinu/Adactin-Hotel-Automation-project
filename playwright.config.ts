import { defineConfig, devices } from '@playwright/test';
import { getEnvConfig, assertEnvConfig } from './config/env';
import dotenv from 'dotenv';
import { defineBddConfig } from 'playwright-bdd';

// Define where your features and step definitions live
const cucumberTests = defineBddConfig({
  features: 'features/*.feature',
  steps: ['steps/*.ts', 'fixtures/index.ts'],
  importTestFrom: 'fixtures/index.ts'
});

dotenv.config();
const env = getEnvConfig();
assertEnvConfig(env);

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: env.baseURL,
    navigationTimeout: env.timeouts.navigation,
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  projects: [
    //project A: standard non-BDD Playwright Tests
    {
      name: 'smoke-tests',
      testMatch: /.*\.spec\.ts/,
    },
    // Project B: Linked strictly to Cucumber Gherkin tests
    {
      name: 'cucumber-tests',
      testDir: cucumberTests, 
    },
    
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
