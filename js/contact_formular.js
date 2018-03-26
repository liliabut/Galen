this.HomePage = $page("Home page", {
  name: "#Nameid", // css locator
  vorname: "#Vornameid",
  email: "#E_Mail_Adresseid",
  nachricht: "#Ihre_Nachricht_an_unsid",
  submitForm: "xpath: //div[@class='module formular ym-clearfix']/form",

  load: function () {
    this.open("https://www.vr.de/privatkunden/service/kontakt/fragen-zur-website.html");
    return this.waitForIt();
  },
  
  sendFormular: function () {
    this.name.typeText("Testname");
    this.vorname.typeText("Testvorname");
    this.email.typeText("test@test.com");
    this.nachricht.typeText("This is test.");
    
    this.submitForm.getWebElement().submit();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.sendFormular();

GalenPages.sleep(10000);

var checkbox = homePage.findChild("#wccheckid");
checkbox.click();

var absenden = homePage.findChild("button.btn.btn-cta");
absenden.click();

GalenPages.sleep(10000);