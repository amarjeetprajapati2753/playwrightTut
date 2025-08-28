import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class DropdownPage extends BasePage {
  constructor(page) {
    super(page);
  }

  // Example locator for a contact form input

  async navigateToDropdownPage() {
    await this.page.goto("Dropdown-Checkboxes-RadioButtons/index.html");
  }

  dropdownMenu(index) {
    return this.page.locator(`//select[@id='dropdowm-menu-${index}']`);
  }

  get pythonOption() {
    return this.page.locator(
      `//select[@id='dropdowm-menu-1']/option[@value='python']`
    );
  }
  get mavenOption() {
    return this.page.locator(
      `//select[@id='dropdowm-menu-2']/option[@value='maven']`
    );
  }
  get javascriptOption() {
    return this.page.locator(
      `//select[@id='dropdowm-menu-2']/option[@value='javascript']`
    );
  }

  get radioLettuce() {
    return this.page.locator(`//input[@type='radio' and @value='lettuce']`);
  }
  get radioCabbage() {
    return this.page.locator(`//input[@type='radio' and @value='cabbage']`);
  }
  get selectFruit() {
    return this.page.locator(`//select[@id='fruit-selects']`);
  }

  get orangeOption() {
    return this.page.locator(
      "//select[@id='fruit-selects']/option[@value='orange']"
    );
  }
  checkboxOptions(index) {
    return this.page.locator(
      `(//input[@type='checkbox' and @value='option-${index}'])`
    );
  }
  radioBtnOptions(index) {
    return this.page.locator(
      `(//input[@type='radio' and @name='color'])[${index}]`
    );
  }

  async selectDropdown(selectBox, value) {
    await selectBox.selectOption(value);
  }

  async verifyDropDown() {
    await this.selectDropdown(this.dropdownMenu(1), "python");
    await expect(this.dropdownMenu(1)).toHaveValue("python");

    await this.selectDropdown(this.dropdownMenu(2), "maven");
    await expect(this.dropdownMenu(2)).toHaveValue("maven");

    await this.selectDropdown(this.dropdownMenu(3), "javascript");
    await expect(this.dropdownMenu(3)).toHaveValue("javascript");
  }

  async verifySelectAndDisable() {
    if (!(await this.radioLettuce.isChecked())) {
      this.radioLettuce.check();
    }
    await expect(this.radioLettuce).toBeChecked();
    await expect(this.radioCabbage).toBeDisabled();
    await expect(this.orangeOption).toBeDisabled();
    await this.selectFruit.selectOption("grape");
    await expect(this.selectFruit).toHaveValue("grape");
  }

  async verifyCheckbox() {
    if (!(await this.checkboxOptions(1).isChecked())) {
      await this.checkboxOptions(1).check();
    }
    await expect(this.checkboxOptions(1)).toBeChecked();

    await this.checkboxOptions(1).uncheck(); // use uncheck instead of check again
    await expect(this.checkboxOptions(1)).not.toBeChecked();

    if (!(await this.checkboxOptions(2).isChecked())) {
      await this.checkboxOptions(2).check();
    }
    await expect(this.checkboxOptions(2)).toBeChecked();

    await this.checkboxOptions(2).uncheck(); // use uncheck instead of check again
    await expect(this.checkboxOptions(2)).not.toBeChecked();
  }

  async verifyRadioButton() {
    for (let i = 1; i <= 5; i++) {
      const radio = this.radioBtnOptions(i);
      await radio.check();
      await expect(radio).toBeChecked();

      for (let j = 1; j <= 5; j++) {
        if (j !== i) {
          await expect(this.radioBtnOptions(j)).not.toBeChecked();
        }
      }
    }
  }
}
