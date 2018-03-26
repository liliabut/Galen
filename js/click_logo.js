this.HomePage = $page("Home page", {
  logo: "#logo", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  clickLogo: function () {
    this.logo.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.clickLogo();