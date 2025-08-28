import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Action Page ", () => {
  test("Drag & Drop, click & hold ,hover ", async ({ actionPage }) => {
    await actionPage.navigateToActionPage();
    await actionPage.verifyDragAndDrop();
    await actionPage.verifyHoldClick();
    await actionPage.verifyHover();
  });
});
