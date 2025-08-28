import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  // Example locator for a contact form input
  get inputUsername() {
    return this.page.locator("//input[@placeholder='Username']");
  }
  get inputPassword() {
    return this.page.locator("//input[@id='password']");
  }

  get btnLogin() {
    return this.page.locator("//button[@id='login-button']");
  }

  async verifyLogin(user, password) {
    await this.inputUsername.fill(user);
    await this.inputPassword.fill(password);
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("validation failed");
      await dialog.accept();
    });
    await this.btnLogin.click();
  }

  async navigateToLoginPage() {
    this.page.goto("Login-Portal/index.html");
  }
}
