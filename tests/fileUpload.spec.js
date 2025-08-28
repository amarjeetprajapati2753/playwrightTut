import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Scroll Page ", () => {
  test("Scroll ", async ({ fileUploadPage }) => {
    await fileUploadPage.navigateToFileUploadPage();
    await fileUploadPage.verifyFileUpload();
  });
});
