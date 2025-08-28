import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Button Click Page ", () => {
  test("Verify click buttons", async ({ buttonClickPage }) => {
    await buttonClickPage.navigateToClickButtonPage();
    await buttonClickPage.webElementClick();
    await buttonClickPage.jsClick();
    await buttonClickPage.actionClick();
  });
});
