import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Hidden Element Page ", () => {
  test("hidden elements  ", async ({ hiddenElementPage }) => {
    await hiddenElementPage.navigateToHiddenElementPage();
    await hiddenElementPage.verifyDisplayNone();
    await hiddenElementPage.verifyVisibilityHidden();
    await hiddenElementPage.verifyOpacityZero();
  });
});
