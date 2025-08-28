import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Pom Page ", () => {
  test("Home page", async ({ pomPage }) => {
    await pomPage.navigateToPomPage();
    await pomPage.verifyHomePage();
  });
  test("Products Page", async ({ pomPage }) => {
    await pomPage.navigateToPomPage();
    await pomPage.verifyProductPage();
  });
  test("Contact Us Page", async ({ pomPage }) => {
    await pomPage.navigateToPomPage();
    await pomPage.verifyContactPage();
  });
});
