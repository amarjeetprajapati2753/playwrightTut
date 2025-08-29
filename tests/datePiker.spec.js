import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Date Picker Page ", () => {
  test.skip("Date picker ", async ({ datePickerPage }) => {
    await datePickerPage.navigateToDatePickerPage();
    await datePickerPage.verifyDatePicker();
  });
});
