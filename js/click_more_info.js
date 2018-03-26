this.HomePage = $page("Home page", {
  moreInfoButton: "xpath: //div[@class='more-info-button']/a", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  clickLogo: function () {
    this.moreInfoButton.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.clickLogo();