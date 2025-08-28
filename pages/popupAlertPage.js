import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class PopupAlertPage extends BasePage {
  constructor(page) {
    super(page);
  }
  // Example locator for a contact form input
  get btnJsAlert() {
    return this.page.locator("//span[@id='button1']");
  }
  get btnModalPop() {
    return this.page.locator("//span[@id='button2']");
  }
  get btnAjaxLoadar() {
    return this.page.locator("//span[@id='button3']");
  }
  get btnConfirmBox() {
    return this.page.locator("//span[@id='button4']");
  }
  get confirmAlertText() {
    return this.page.locator("//p[@id='confirm-alert-text']");
  }
  get modalTitle() {
    return this.page.locator("//h4[contains(@class,'modal-title')]");
  }
  get btnClose() {
    return this.page.locator("//button[normalize-space()='Close']");
  }

  async clickOnAjaxLoader() {
    await this.btnAjaxLoadar.click();
  }

  async verifyModalPopup() {
    await this.btnModalPop.click();
    await expect(this.modalTitle).toHaveText(
      "It’s that Easy!! Well I think it is....."
    );
    await this.btnClose.click();
  }
  async verifyAlertBox() {
    this.page.once("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("I am an alert box!");
      await dialog.accept();
    });
    await this.btnJsAlert.click();
    await this.page.waitForTimeout(2000);
  }

  async verifyConfirmBox() {
    this.page.once("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      expect(dialog.type()).toContain("confirm");
      expect(dialog.message()).toContain("Press a button!");
      await dialog.accept();
    });

    await this.btnConfirmBox.click();

    await expect(await this.confirmAlertText).toHaveText("You pressed OK!");
    await this.page.waitForTimeout(2000);
    this.page.once("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      expect(dialog.type()).toContain("confirm");
      expect(dialog.message()).toContain("Press a button!");
      await dialog.dismiss();
    });
    await this.btnConfirmBox.click();
    await expect(await this.confirmAlertText).toHaveText("You pressed Cancel!");
  }

  async navigateToPopupAlertPage() {
    this.page.goto("Popup-Alerts/index.html");
  }
}
