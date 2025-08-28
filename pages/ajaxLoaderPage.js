import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class AjaxLoaderPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get loader() {
    return this.page.locator("//div[@id='loader']");
  }
  get btnClickMe() {
    return this.page.locator("//p[normalize-space()='CLICK ME!']");
  }
  async navigateToLoaderPage() {
    await this.page.goto("Ajax-Loader/index.html");
  }

  get modalTitle() {
    return this.page.locator("//h4[@class='modal-title']");
  }

  async verifyLaoder() {
    await this.loader.waitFor({ state: "hidden" });
    await this.btnClickMe.waitFor({ state: "visible" });
    await expect(this.btnClickMe).toBeVisible();
    await this.btnClickMe.click();
    await expect(this.modalTitle).toHaveText("Well Done For Waiting....!!!");
  }
}
