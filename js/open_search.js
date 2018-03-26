this.HomePage = $page("Home page", {
  searchButton: "span.navmobilelist__link--search", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  openSearch: function () {
    this.searchButton.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.openSearch();