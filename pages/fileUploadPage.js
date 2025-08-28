import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class FileUploadPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get inputFile() {
    return this.page.locator("//input[@id='myFile']");
  }
  get btnSubmit() {
    return this.page.locator("//input[@id='submit-button']");
  }

  async navigateToFileUploadPage() {
    await this.page.goto("File-Upload/index.html");
  }

  async verifyFileUpload() {
    await this.inputFile.setInputFiles("uploadFiles/test1.pdf");
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Your file has now been uploaded!");
      await dialog.accept();
    });
    await this.btnSubmit.click();
  }
}
