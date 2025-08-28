import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Dropdown,Check-box,Radion-button Page ", () => {
  test("Dropdown,Check-box,Radion-button", async ({ dropdownPage }) => {
    await dropdownPage.navigateToDropdownPage();
    await dropdownPage.verifyDropDown();
    await dropdownPage.verifySelectAndDisable();
    await dropdownPage.verifyCheckbox();
    await dropdownPage.verifyRadioButton();
  });
});
