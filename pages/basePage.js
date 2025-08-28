// basePage.js
export default class BasePage {
  constructor(page) {
    this._page = page; // use _page to indicate "private"
  }

  // Getter to access the page object in child classes
  get page() {
    return this._page;
  }
}

// module.exports = BasePage;
