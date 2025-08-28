import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class PomPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get linkHome() {
    return this.page.locator("//a[normalize-space()='Home']");
  }
  get linkOurProducts() {
    return this.page.locator("//a[normalize-space()='Our Products']");
  }
  get linkContactUs() {
    return this.page.locator("//a[normalize-space()='Contact Us']");
  }

  get titleHomeModal() {
    return this.page.locator("//h4[@class='modal-title']");
  }
  get titleProductModal() {
    return this.page.locator("//h4[@class='modal-title']");
  }
  get btnFindOutMore() {
    return this.page.locator("//button[@id='button-find-out-more']");
  }
  get btnCloseHomePage() {
    return this.page.locator("//button[normalize-space()='Close']");
  }

  get btnCloseProductPage() {
    return this.page.locator("//button[normalize-space()='Close']");
  }
  get cameras() {
    return this.page.locator("//div[@id='cameras']");
  }
  get usedLaptop() {
    return this.page.locator("//div[@id='used-laptops']");
  }
  get newLaptop() {
    return this.page.locator("//div[@id='new-laptops']");
  }
  get specialOffers() {
    return this.page.locator("//div[@id='special-offers']");
  }
  get components() {
    return this.page.locator("//div[@id='components']");
  }
  get desktopSystem() {
    return this.page.locator("//div[@id='desktop-systems']");
  }
  get gamesConsoles() {
    return this.page.locator("//div[@id='game-consoles']");
  }

  async navigateToPomPage() {
    await this.page.goto("Page-Object-Model/index.html");
  }

  async verifyProduct(productLocator) {
    await productLocator.click();
    await expect(this.titleProductModal).toHaveText(
      "SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT WEBDRIVERUNIVERSITY.COM"
    );
    await this.btnCloseProductPage.click();
  }

  async verifyHomePage() {
    await this.linkHome.click();
    await this.btnFindOutMore.click();
    await expect(this.titleHomeModal).toHaveText(
      "Welcome to webdriveruniversity.com"
    );
    await this.btnCloseHomePage.click();
  }
  async verifyProductPage() {
    await this.linkOurProducts.click();
    await this.verifyProduct(this.specialOffers);
    await this.verifyProduct(this.cameras);
    await this.verifyProduct(this.newLaptop);
    await this.verifyProduct(this.usedLaptop);
    await this.verifyProduct(this.gamesConsoles);
    await this.verifyProduct(this.components);
    await this.verifyProduct(this.desktopSystem);
  }

  async verifyContactPage() {
    await this.linkContactUs.click();
    await expect(this.page).toHaveURL(/.*Contact-Us\/contactus\.html/);
  }
}
