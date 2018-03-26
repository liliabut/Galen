this.HomePage = $page("Prototype filial suche page", {
  dropdownOranienburg: "id: ui-id-10",

  load: function () {
    this.open("http://rc-ogrhtmlprototyp.testintern/17-2-0/geldautomatensuche.html");
    
    return this.waitForIt();
  },
  clickDropdownMenu: function () {
    this.dropdownOranienburg.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.clickDropdownMenu();