this.HomePage = $page("Home page", {
  menuButton: "span.navmobilelist__link--menu", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  openMenu: function () {
    this.menuButton.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.openMenu();