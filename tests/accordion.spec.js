import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Accordion Page ", () => {
  test("Accordion page", async ({ accordionPage }) => {
    await accordionPage.navigateToAccordionPage();
    await accordionPage.VerifyAllAccrodions();
  });
});
