// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// ✅ Load env file
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */

  //  testMatch: ['example.spec.js'],
  // testMatch: ["**/contact.spec.js"],
  // testMatch: ["**/login.spec.js"],
  // testMatch: ['**/buttonClick.spec.js'],
  // testMatch: ['**/todoList.spec.js'],
  // testMatch: ['**/pom.spec.js'],
  // testMatch: ['**/accordion.spec.js'],
  // testMatch: ['**/dropdown.spec.js'],
  // testMatch: ['**/ajaxLoader.spec.js'],
  // testMatch: ['**/actions.spec.js'],
  // testMatch: ['**/scroll.spec.js'],
  // testMatch: ['**/fileUpload.spec.js'],
  // testMatch: ["**/autocomplete.spec.js"],
  //   testMatch: ["**/popAlert.spec.js"],
  // testMatch: ["**/hiddenElement.spec.js"],
  // testMatch: ["**/datePiker.spec.js"],

  testMatch: [
    "**/contact.spec.js",
    "**/login.spec.js",
    "**/buttonClick.spec.js",
    "**/todoList.spec.js",
    "**/pom.spec.js",
    "**/accordion.spec.js",
    "**/dropdown.spec.js",
    "**/ajaxLoader.spec.js",
    "**/actions.spec.js",
    "**/scroll.spec.js",
    "**/fileUpload.spec.js",
    "**/autocomplete.spec.js",
    "**/popAlert.spec.js",
    "**/hiddenElement.spec.js",
    "**/datePiker.spec.js",
  ],

  testIgnore: [
    // '**/createManualDispense.spec.ts',
  ],

  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.BASE_URL, // ✅ Use env variable
    // headless: false,
    headless: true,
    // screenshot: "only-on-failure",
    screenshot: "on",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      // use: { ...devices['Desktop Chrome'] },
      use: {
        browserName: "chromium",
        // headless: false,
        headless: true,
        viewport: { width: 1920, height: 1080 },
        // viewport: null, // Let the browser define the viewport (e.g. full screen)
        launchOptions: {
          args: ["--start-maximized"], // Start maximized
          slowMo: 500,
        },
      },
    },
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
