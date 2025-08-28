import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class ScrollPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get zone1() {
    return this.page.locator("//div[@id='zone1']");
  }
  get zone2() {
    return this.page.locator("//div[@id='zone2']");
  }
  get zone3() {
    return this.page.locator("//div[@id='zone3']");
  }
  get zone4() {
    return this.page.locator("//div[@id='zone4']");
  }

  async navigateToScrollPage() {
    await this.page.goto("Scrolling/index.html");
  }
  async verifyScroll() {
    await this.zone1.scrollIntoViewIfNeeded();
    await expect(this.zone1).toBeVisible();
    await this.zone1.click();
    await this.page.waitForTimeout(500);
    await expect(this.zone1).toContainText("Well done for scrolling to me!");

    await this.zone2.scrollIntoViewIfNeeded();
    await expect(this.zone2).toBeVisible();
    await this.zone2.click();
    await this.page.waitForTimeout(500);
    await expect(this.zone2).toContainText("Entries");

    await this.zone3.scrollIntoViewIfNeeded();
    await expect(this.zone3).toBeVisible();
    await this.zone3.click();
    await this.page.waitForTimeout(500);
    await expect(this.zone2).toContainText("Entries");

    await this.zone4.scrollIntoViewIfNeeded();
    await expect(this.zone4).toBeVisible();
    await this.zone4.click();
    await this.page.waitForTimeout(500);
    await expect(this.zone4).toContainText("X:");
    await expect(this.zone4).toContainText("Y:");
  }
}
