this.HomePage = $page("Home page", {
  searchField: "input.ui-autocomplete-input", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  openSearch: function () {
    this.searchField.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.openSearch();