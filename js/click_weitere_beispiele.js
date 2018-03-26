this.HomePage = $page("Home page", {
  weitereBeispieleButton: "xpath: //*[contains(@href, 'https://www.vr.de/privatkunden/mitgliederprojekte.html')]", // css locator

  load: function () {
    this.open("http://vr.de");
    return this.waitForIt();
  },
  clickWeitereBeispieleButton: function () {
    this.weitereBeispieleButton.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.clickWeitereBeispieleButton();