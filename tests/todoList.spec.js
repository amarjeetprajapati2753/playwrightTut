import test, { expect } from "../fixtures/pomFixture.js";
import todoData from "../data/todoData.json";

test.describe("Todo List Page ", () => {
  test("verify add item", async ({ todoListPage }) => {
    await todoListPage.navigateToTodoListPage();
    await todoListPage.verifyAddTodo(todoData.todoItem);
  });
  test("verify delete item", async ({ todoListPage }) => {
    await todoListPage.navigateToTodoListPage();
    await todoListPage.verifyDeleteTodo(todoData.todoItem);
  });
});
