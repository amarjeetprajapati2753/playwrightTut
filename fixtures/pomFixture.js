import { test as base, chromium, expect } from "@playwright/test";
import { ContactPage } from "../pages/contactPage.js";
import { LoginPage } from "../pages/loginPage.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { ButtonClickPage } from "../pages/buttonClickPage.js";
import { TodoListPage } from "../pages/todoListPage.js";
import { PomPage } from "../pages/pomPage.js";
import { AccordionPage } from "../pages/accordionPage.js";
import { DropdownPage } from "../pages/dropdownPage.js";
import { AjaxLoaderPage } from "../pages/ajaxLoaderPage.js";
import { ActionPage } from "../pages/actionsPage.js";
import { ScrollPage } from "../pages/scrollPage.js";
import { FileUploadPage } from "../pages/fileUploadPage.js";
import { AutoCompletePage } from "../pages/autoCompletePage.js";
import { PopupAlertPage } from "../pages/popupAlertPage.js";
import { HiddenElementPage } from "../pages/hiddenElementPage.js";
import { DatePickerPage } from "../pages/datePickerPage.js";

dotenv.config();

const test = base.extend({
  // Launch browser (shared across workers)
  browser: async ({}, use) => {
    // const browser = await chromium.launch({ headless: false });
    const browser = await chromium.launch({ headless: true });
    await use(browser);
    await browser.close();
  },

  // Create shared context (we'll call it sharedContext now)
  sharedContext: async ({ browser }, use) => {
    const context = await browser.newContext({
      recordVideo: {
        dir: "reports/videos",
      },
    });
    await use(context);
    await context.close();
  },

  // Create shared page from sharedContext
  sharedPage: async ({ sharedContext }, use) => {
    const page = await sharedContext.newPage();
    await use(page);

    const videoPath = await page.video()?.path();
    if (videoPath) {
      const dest = path.join("reports/videos", `video-${Date.now()}.webm`);
      fs.mkdirSync("reports/videos", { recursive: true });
      fs.copyFileSync(videoPath, dest);
    }

    await page.close();
  },

  // Contact Page using sharedPage
  contactPage: async ({ sharedPage }, use) => {
    await use(new ContactPage(sharedPage));
  },
  loginPage: async ({ sharedPage }, use) => {
    await use(new LoginPage(sharedPage));
  },
  buttonClickPage: async ({ sharedPage }, use) => {
    await use(new ButtonClickPage(sharedPage));
  },
  todoListPage: async ({ sharedPage }, use) => {
    await use(new TodoListPage(sharedPage));
  },
  pomPage: async ({ sharedPage }, use) => {
    await use(new PomPage(sharedPage));
  },
  accordionPage: async ({ sharedPage }, use) => {
    await use(new AccordionPage(sharedPage));
  },
  dropdownPage: async ({ sharedPage }, use) => {
    await use(new DropdownPage(sharedPage));
  },
  ajaxLoaderPage: async ({ sharedPage }, use) => {
    await use(new AjaxLoaderPage(sharedPage));
  },
  actionPage: async ({ sharedPage }, use) => {
    await use(new ActionPage(sharedPage));
  },
  scrollPage: async ({ sharedPage }, use) => {
    await use(new ScrollPage(sharedPage));
  },
  fileUploadPage: async ({ sharedPage }, use) => {
    await use(new FileUploadPage(sharedPage));
  },
  autoCompletePage: async ({ sharedPage }, use) => {
    await use(new AutoCompletePage(sharedPage));
  },
  popAlertPage: async ({ sharedPage }, use) => {
    await use(new PopupAlertPage(sharedPage));
  },
  hiddenElementPage: async ({ sharedPage }, use) => {
    await use(new HiddenElementPage(sharedPage));
  },
  datePickerPage: async ({ sharedPage }, use) => {
    await use(new DatePickerPage(sharedPage));
  },
});

export default test;
export { expect };
