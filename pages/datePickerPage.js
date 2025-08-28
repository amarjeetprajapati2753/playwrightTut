import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class DatePickerPage extends BasePage {
  constructor(page) {
    super(page);
  }
  // Example locator for a contact form input
  get iconSelectDate() {
    return this.page.locator("//span[@class='input-group-addon']");
  }

  get monthYearHeading() {
    return this.page.locator("(//th[contains(@class,'datepicker-switch')])[1]");
  }
  get yearHeading() {
    return this.page.locator("(//th[contains(@class,'datepicker-switch')])[2]");
  }

  selectDay(index) {
    return this.page.locator(
      `//td[contains(@class,'day') and normalize-space()='${index}'  and not(contains(@class,'old'))]`
    );
  }
  selectMonth(month) {
    return this.page.locator(`//span[normalize-space()='${month}']`);
  }

  get selectedDate() {
    return this.page.locator("(//input[@type='text'])[1]");
  }
  get iconNextYearSelect() {
    return this.page.locator("(//th[@class='next'][normalize-space()='»'])[2]");
  }
  get iconPrevYearSelect() {
    return this.page.locator("(//th[@class='prev'][normalize-space()='«'])[2]");
  }

  async selectDate(date) {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    const datestr = `${mm}-${dd}-${yyyy}`;
    const [month, day, year] = datestr.split("-");
    const m = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let mon = m[+month - 1];
    await this.monthYearHeading.click();
    for (let i = 0; i < 1000; i++) {
      const yearText = await this.yearHeading.textContent();
      if (yearText.includes(year)) {
        await this.selectMonth(mon).click();
        await this.selectDay(day).waitFor({ state: "visible" });
        await this.selectDay(day).click();
        break;
      }
      await this.iconNextYearSelect.click();
      await this.page.waitForTimeout(200);
    }
  }

  async verifyDatePicker() {
    await this.iconSelectDate.click();
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const yyyy = today.getFullYear();
    const date = `${mm}-${dd}-${yyyy}`;
    await this.selectDate(today);
    await expect(this.selectedDate).toHaveValue(date);
  }

  async navigateToDatePickerPage() {
    await this.page.goto("Datepicker/index.html");
  }
}
