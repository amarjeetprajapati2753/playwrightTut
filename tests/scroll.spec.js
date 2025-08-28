import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Scroll Page ", () => {
  test("Scroll ", async ({ scrollPage }) => {
    await scrollPage.navigateToScrollPage();
    await scrollPage.verifyScroll();
  });
});
