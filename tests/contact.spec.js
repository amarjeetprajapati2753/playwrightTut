import test, { expect } from "../fixtures/pomFixture.js";
import contactData from "../data/contactdata.json";

test.describe("Contact Page Flow", () => {
  test("Submit the contact form", async ({ contactPage, page }) => {
    await contactPage.navigateToContactPage();
    await contactPage.fillForm(contactData);
    await contactPage.submitForm();
    await contactPage.verifySuccessSubmitContactForm();
  });

  test("Reset the contact form", async ({ contactPage }) => {
    await contactPage.navigateToContactPage();
    await contactPage.fillForm(contactData);
    await contactPage.resetForm();
    await contactPage.expectFormToBeCleared();
  });
});
