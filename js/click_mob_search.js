this.HomePage = $page("Home page", {
  searchButton: "span.navmobilelist__link.navmobilelist__link--search",
  mobSearchField: "#mobile-search",

  load: function () {
    this.open("http://vr.de");
    
    GalenPages.sleep(2000);
    
    this.searchButton.click();
    
    GalenPages.sleep(2000);
    
    this.mobSearchField.typeText("info");
    this.mobSearchField.getWebElement().submit();
    
    //return this.waitForIt();
  }  
});

var homePage = new HomePage(driver).load();

//homePage.clickSearch();

//GalenPages.sleep(2000);

//var mobSearchField = homePage.findChild("form");
//homePage.submitSearch();