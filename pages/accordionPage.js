import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class AccordionPage extends BasePage {
  constructor(page) {
    super(page);
  }

  // Example locator for a contact form input
  get accordionManualTesting() {
    return this.page.locator("//button[@id='manual-testing-accordion']");
  }

  get accordionCucumber() {
    return this.page.locator("//button[@id='cucumber-accordion']");
  }

  get accordionAutomation() {
    return this.page.locator("//button[@id='automation-accordion']");
  }

  get accordionClick() {
    return this.page.locator("//button[@id='click-accordion']");
  }

  async navigateToAccordionPage() {
    await this.page.goto("Accordion/index.html");
  }

  accordionPanel(index) {
    return this.page.locator(`(//div[@class='panel'])[${index}]`);
  }

  async verifyAccordion(accordionLocator, panelLocator) {
    await expect(accordionLocator).toBeVisible();
    await accordionLocator.scrollIntoViewIfNeeded();
    await accordionLocator.click();
    await this.page.waitForTimeout(300);
    const expandedMaxHeight = await panelLocator.evaluate(
      (el) => el.style.maxHeight
    );
    expect(expandedMaxHeight).not.toBe("");
    await accordionLocator.click();
    await this.page.waitForTimeout(300);
    const collapsedMaxHeight = await panelLocator.evaluate(
      (el) => el.style.maxHeight
    );
    expect(collapsedMaxHeight).toBe("");
  }

  async VerifyAllAccrodions() {
    await this.verifyAccordion(
      this.accordionManualTesting,
      this.accordionPanel(1)
    );
    await this.verifyAccordion(this.accordionCucumber, this.accordionPanel(2));
    await this.verifyAccordion(
      this.accordionAutomation,
      this.accordionPanel(3)
    );
    await this.verifyAccordion(this.accordionClick, this.accordionPanel(4));
  }
}
