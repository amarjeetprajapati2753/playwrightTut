import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Ajax-Loader Page ", () => {
  test("ajax loader page", async ({ ajaxLoaderPage }) => {
    await ajaxLoaderPage.navigateToLoaderPage();
    await ajaxLoaderPage.verifyLaoder();
  });
});
