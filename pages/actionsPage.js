import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class ActionPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get sourceBox() {
    return this.page.locator("//div[@id='draggable']//p");
  }
  get targetBox() {
    return this.page.locator("//div[@id='droppable']");
  }

  get clickBox() {
    return this.page.locator("//div[@id='click-box']");
  }
  get linkLink1() {
    return this.page.locator(
      "(//a[@class='list-alert'][normalize-space()='Link 1'])[1]"
    );
  }
  get btnFirstHover() {
    return this.page.locator(
      "//button[normalize-space()='Hover Over Me First!']"
    );
  }

  async navigateToActionPage() {
    await this.page.goto("Actions/index.html");
  }
  async verifyDragAndDrop() {
    await this.sourceBox.dragTo(this.targetBox);
    await expect(this.targetBox).toHaveText("Dropped!");
  }
  async verifyHoldClick() {
    await this.clickBox.click();
    await expect(this.clickBox).toHaveText("Dont release me!!!");
    await this.clickBox.hover();
    await this.page.mouse.down();
    await expect(this.clickBox).toHaveText(
      "Well done! keep holding that click now....."
    );
  }
  async verifyHover() {
    await this.btnFirstHover.hover();
    await expect(this.linkLink1).toBeVisible();
    this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Well done you clicked on the link!");
      await dialog.accept();
    });
    await this.linkLink1.click();
  }
}
