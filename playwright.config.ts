import { defineConfig, devices } from '@playwright/test';
import { getEnvConfig, assertEnvConfig } from './config/env';
import dotenv from 'dotenv';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

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
  timeout: 90 * 1000, // Adactin regularly takes 15-25s to serve a page; a 30s budget can't fit a multi-navigation scenario
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [["list"],
  cucumberReporter('html', { outputFile: 'cucumber-report/report.html' })],
  use: {
    baseURL: env.baseURL,
    navigationTimeout: env.timeouts.navigation,
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15_000,
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
