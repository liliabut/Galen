this.HomePage = $page("Home page", {
  alleVideosButton: "xpath: //*[contains(@href, 'https://www.vr.de/privatkunden/news.html')]", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  clickAlleVideosButton: function () {
    this.alleVideosButton.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.clickAlleVideosButton();