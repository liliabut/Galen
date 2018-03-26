GalenPages.settings.cacheWebElements = false;
var url = arg.url;

// full screen
//driver.manage().window().maximize();

// breite, lange
//driver.executeScript("window.resizeTo(768,800);");

this.HomePage = $page("Login page", {
  load: function () {
    this.open(url);
    
    //Actions(driver).sendKeys('Pagedown').sendKeys('Pagedown').perform();
  },
});

var homePage = new HomePage(driver).load();