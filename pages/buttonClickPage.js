import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class ButtonClickPage extends BasePage {
  constructor(page) {
    super(page);
  }

  // Example locator for a contact form input
  get btnWebElementClick() {
    return this.page.locator("//span[@id='button1']");
  }
  get btnJsClick() {
    return this.page.locator("//span[@id='button2']");
  }
  get btnMoveActionClick() {
    return this.page.locator("//span[@id='button3']");
  }

  modalTitle(index) {
    return this.page.locator(`(//h4[@class='modal-title'])[${index}]`);
  }
  btnClose(index) {
    return this.page.locator(
      `(//button[@type='button'][normalize-space()='Close'])[${index}]`
    );
  }

  async navigateToClickButtonPage() {
    await this.page.goto("Click-Buttons/index.html");
  }

  async webElementClick() {
    await this.btnWebElementClick.click();
    await expect(this.modalTitle(1)).toHaveText("Congratulations!");
    await this.btnClose(1).click();
  }
  async jsClick() {
    await this.btnJsClick.click();
    await expect(this.modalTitle(2)).toHaveText(
      "It’s that Easy!! Well I think it is....."
    );
    await this.btnClose(2).click();
  }
  async actionClick() {
    await this.btnMoveActionClick.hover();
    await this.btnMoveActionClick.click();
    await expect(this.modalTitle(3)).toHaveText(
      "Well done! the Action Move & Click can become very useful!"
    );
    await this.btnClose(3).click();
  }
}
