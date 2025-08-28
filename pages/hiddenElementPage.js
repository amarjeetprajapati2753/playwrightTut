import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class HiddenElementPage extends BasePage {
  constructor(page) {
    super(page);
  }
  // Example locator for a contact form input
  get displayNoneSection() {
    return this.page.locator("//div[@id='not-displayed']");
  }
  get visibilityHiddenSection() {
    return this.page.locator("//div[@id='visibility-hidden']");
  }
  get zeroOpacitySection() {
    return this.page.locator("//div[@id='zero-opacity']");
  }
  get btnClickMe1() {
    return this.page.locator("//span[@id='button1']");
  }
  get btnClickMe2() {
    return this.page.locator("//span[@id='button2']");
  }
  get btnClickMe3() {
    return this.page.locator("//span[@id='button3']");
  }

  async verifyDisplayNone() {
    const el1 = await this.displayNoneSection.elementHandle();
    await this.page.evaluate((el) => {
      el.style.display = "block";
    }, el1);
    await expect(this.btnClickMe1).toBeVisible();
  }
  async verifyVisibilityHidden() {
    const el1 = await this.visibilityHiddenSection.elementHandle();
    await this.page.evaluate((el) => {
      el.style.visibility = "visible";
    }, el1);
    await expect(this.btnClickMe2).toBeVisible();
  }
  async verifyOpacityZero() {
    const el1 = await this.zeroOpacitySection.elementHandle();
    await this.page.evaluate((el) => {
      el.style.opacity = "1";
    }, el1);
    await expect(this.btnClickMe3).toBeVisible();
  }

  async navigateToHiddenElementPage() {
    await this.page.goto("Hidden-Elements/index.html");
  }
}
