import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class ContactPage extends BasePage {
  constructor(page) {
    super(page);
  }

  // Example locator for a contact form input
  get inputFirstName() {
    return this.page.locator("//input[@placeholder='First Name']");
  }
  get inputLastName() {
    return this.page.locator("//input[@placeholder='Last Name']");
  }
  get inputEmail() {
    return this.page.locator("//input[@placeholder='Email Address']");
  }
  get inputComment() {
    return this.page.locator("//textarea[@placeholder='Comments']");
  }
  get btnReset() {
    return this.page.locator("//input[@type='reset' and @value='RESET']");
  }
  get btnSubmit() {
    return this.page.locator("//input[@type='submit' and @value='SUBMIT']");
  }

  //   async got

  async navigateToContactPage() {
    this.page.goto("Contact-Us/contactus.html");
  }

  async fillForm({ firstName, lastName, email, comment }) {
    // await  this.page.pause();
    await this.inputFirstName.fill(firstName);
    await this.inputLastName.fill(lastName);
    await this.inputEmail.fill(email);
    await this.inputComment.fill(comment);
  }

  async submitForm() {
    await this.btnSubmit.click();
  }

  async verifySuccessSubmitContactForm() {
    await expect(this.page).toHaveURL(
      "/Contact-Us/contact-form-thank-you.html"
    );
  }

  async resetForm() {
    await this.btnReset.click();
  }

  async expectFormToBeCleared() {
    await expect(this.inputFirstName).toHaveValue(""),
      await expect(this.inputLastName).toHaveValue(""),
      await expect(this.inputEmail).toHaveValue(""),
      await expect(this.inputComment).toHaveValue("");
  }
}

// module.exports = ContactPage;
