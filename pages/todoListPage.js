import BasePage from "./basePage";
import { expect } from "@playwright/test";

export class TodoListPage extends BasePage {
  constructor(page) {
    super(page);
  }

  // Example locator for a contact form input
  get inputAddTodo() {
    return this.page.locator("//input[@placeholder='Add new todo']");
  }
  get iconAdd() {
    return this.page.locator("//i[@id='plus-icon']");
  }

  get listItems() {
    return this.page.locator("//ul//li");
  }
  get listItemsDeleteIcon() {
    return this.page.locator("//ul//li//i");
  }

  async navigateToTodoListPage() {
    await this.page.goto("To-Do-List/index.html");
  }

  async verifyAddTodo(text) {
    if (!(await this.inputAddTodo.isVisible())) {
      await this.iconAdd.click();
    }
    await this.inputAddTodo.fill(text);
    await this.inputAddTodo.press("Enter");
    const items = await this.listItems;
    const count = await items.count();
    await expect(items.nth(count - 1)).toHaveText(text);
  }
  async verifyDeleteTodo(text) {
    await this.verifyAddTodo(text);
    const items = await this.listItems;
    const deleteIcons = await this.listItemsDeleteIcon;
    const count = await items.count();
    items.nth(count - 1).hover();
    deleteIcons.nth(count - 1).click();
    await expect(items).toHaveCount(count - 1);
  }
}
