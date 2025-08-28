import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class AutoCompletePage extends BasePage {
  constructor(page) {
    super(page);
  }

  get inputFoodItem() {
    return this.page.locator("//input[@id='myInput']");
  }
  get suggestionOptions() {
    // return this.page.locator("//div[@id='myInputautocomplete-list']/div");
    return "//div[@id='myInputautocomplete-list']/div";
  }
  get btnSubmit() {
    return this.page.locator("//input[@id='submit-button']");
  }
  async navigateToAutoCompletePage() {
    await this.page.goto("Autocomplete-TextField/autocomplete-textfield.html");
  }

  async verifyAutoComplete() {
    await this.inputFoodItem.fill("Apple");
    await this.page.waitForSelector(this.suggestionOptions);
    let suggestions = await this.page.$$(this.suggestionOptions);
    for (let option of suggestions) {
      let val = await option.textContent();
      if (val.includes("Apple")) {
        await option.click();
        break;
      }
    }
    await this.btnSubmit.click();
    await expect(this.page).toHaveURL(/.*food-item=Apple/);
    await this.inputFoodItem.fill("Avacado");
    await this.page.waitForSelector(this.suggestionOptions);
    suggestions = await this.page.$$(this.suggestionOptions);
    for (let option of suggestions) {
      let val = await option.textContent();
      if (val.includes("Avacado")) {
        await option.click();
        break;
      }
    }
    await this.btnSubmit.click();
    await expect(this.page).toHaveURL(/.*food-item=Avacado/);
  }
}
