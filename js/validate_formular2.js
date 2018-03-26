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
    this.name.typeText("Testname%&$_§ä#");
    this.vorname.typeText("/Testname%&$_§ä");
    this.email.typeText("tes!t@t#st&com");
    this.nachricht.typeText("This is test.");
    
    this.submitForm.getWebElement().submit(); 
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.sendFormular();