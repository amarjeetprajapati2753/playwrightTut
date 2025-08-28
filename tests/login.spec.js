import test, { expect } from "../fixtures/pomFixture.js";
import loginData from "../data/loginData.json";

test.describe("Login Page ", () => {
  test("Login with empty input fields", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.verifyLogin(
      loginData.emptyFields.username,
      loginData.emptyFields.password
    );
  });
  test("Login with invalid input", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.verifyLogin(
      loginData.invalidCredentials.username,
      loginData.invalidCredentials.password
    );
  });
});
