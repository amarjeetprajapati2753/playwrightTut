import test, { expect } from "../fixtures/pomFixture.js";

test.describe("Autocomplete Page ", () => {
  test("auto complete page ", async ({ autoCompletePage }) => {
    await autoCompletePage.navigateToAutoCompletePage();
    await autoCompletePage.verifyAutoComplete();
  });
});
