this.HomePage = $page("Home page", {
  localButton: "span.navmobilelist__link--localisation", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  openLocal: function () {
    this.localButton.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.openLocal();