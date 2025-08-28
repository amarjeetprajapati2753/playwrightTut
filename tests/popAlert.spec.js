import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Popup Page ", () => {
  test("alert , popup  ", async ({ popAlertPage }) => {
    await popAlertPage.navigateToPopupAlertPage();
    await popAlertPage.verifyAlertBox();
    await popAlertPage.verifyModalPopup();
    await popAlertPage.verifyConfirmBox();
  });
  test("Ajax loader  ", async ({ popAlertPage, ajaxLoaderPage }) => {
    await popAlertPage.navigateToPopupAlertPage();
    await popAlertPage.clickOnAjaxLoader();
    await ajaxLoaderPage.verifyLaoder();
  });
});
