driver.executeScript("document.getElementById('aps-dropdown-widget-1-button').click();");
GalenPages.sleep(10000);
// codes for keys findet man hier: https://www.w3.org/TR/2012/WD-webdriver-20120710/#character-types
driver.findElement(By.id("aps-dropdown-widget-1-menu")).sendKeys('\uE015' + '\uE015' + '\uE015' + '\uE015' + '\uE015' + '\uE015' + '\uE007');
GalenPages.sleep(10000);