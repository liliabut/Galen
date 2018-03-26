// sliders: remove ALL event listeners
//driver.executeScript("var e = document.getElementById('main-content'), ec = e.cloneNode(true); e.parentNode.replaceChild(ec, e);");
//driver.executeScript("var e = document.getElementById('allinone_thumbnailsBanner_photoText2'); e.style.display='none';");
//driver.executeScript("var e = document.getElementById('allinone_thumbnailsBanner_photoText1'); e.style.display='block';");

// for flessabank
driver.executeScript("var e = document.getElementById('main'), ec = e.cloneNode(true); e.parentNode.replaceChild(ec, e);");

// BBBank
// Marginalspalte dynamischer banner
//driver.executeScript("var element = document.getElementById('inlineMedia'); if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// Prototyp/INDI

//driver.executeScript("var element = document.getElementsByClassName('acc-content')[0]; if (element !== 'undefined' && element !== null && !!element) {var element2; do {element2 = document.getElementsByClassName('acc-content active')[0];} while(element === 'undefined');}");

// Campagne Slider
driver.executeScript("var element = document.getElementsByClassName('module module-carousel   has-transition-fade')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");


// remove/delete element externer Inhalt
driver.executeScript("var element = document.getElementsByClassName('module module-teaser module-external ym-clearfix')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");



// remove/delete element seiten anfang button
driver.executeScript("var element = document.getElementsByClassName('top-link is-visible')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// remove/delete stickynav
//driver.executeScript("var element = document.getElementsByClassName('module stickynav')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// remove/delete cookie-layer
//driver.executeScript("var element = document.getElementsByClassName('cookie-layer__inner')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");
//

// remove/delete Kontakt (Marginalspalte)
//driver.executeScript("var element = document.getElementById('secondary-page-area'); if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// remove/delete user like button
//driver.executeScript("var element = document.getElementById('userlike-tab'); if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");


// ------------------ VR und gasf
// slider in footer
//driver.executeScript("var element = document.getElementsByClassName('megafooter-slider')[0]; if (element !== 'undefined' && element !== null && !!element) {element.style.display = 'none';}");
//driver.executeScript("var element = document.getElementsByClassName('megafooter-slider')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");
//driver.executeScript("var element = document.getElementsByClassName('megafooter-inner-full')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

//driver.executeScript("var element = document.getElementById('header'); if (element !== 'undefined' && element !== null && !!element) {element.style.display = 'none';}");

// sticky blue window on right side
//driver.executeScript("var element = document.getElementsByClassName('localisation-sticky')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// hide element logo meine bank
driver.executeScript("var element = document.getElementsByClassName('logo-meine-bank__wrapper')[0]; if (element !== 'undefined' && element !== null && !!element) {element.style.display = 'none';}");

// remove/delete element seiten anfang button
driver.executeScript("var element = document.getElementsByClassName('top-link')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

driver.executeScript("var element = document.getElementsByClassName('campaign-area')[0]; if (element !== 'undefined' && element !== null && !!element) {element.style.display = 'none';}");
//driver.executeScript("var element = document.getElementsByClassName('module-carousel')[0]; if (element !== 'undefined' && element !== null && !!element) {element.style.display = 'none';}");

//driver.executeScript("var element = document.getElementsByClassName('module stickynav')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

//driver.executeScript("var element = document.getElementsByClassName('module module-external ym-clearfix')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

//driver.executeScript("var element = document.getElementsByClassName('layout-wrapper account-change omnikanal-nav-target')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

//driver.executeScript("var element = document.getElementsByClassName('layout-wrapper profibroker omnikanal-nav-target')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// youtube player
//driver.executeScript("var element = document.getElementById('player'); if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// remove all players
//driver.executeScript("var element = document.querySelectorAll('[id=player]'); if (element !== 'undefined' && element !== null && !!element) {element.forEach(function(e, index, array) {e.parentNode.removeChild(e);})}");

// remove all iframes
//driver.executeScript("var element = document.querySelectorAll('iframe'); if (element !== 'undefined' && element !== null && !!element) {element.forEach(function(e, index, array) {e.parentNode.removeChild(e);})}");

// remove videoportal player
//driver.executeScript("var element = document.getElementsByClassName('module-videoplayer__inner')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// close overlay "ja"/"nein" window
//driver.executeScript("var element = document.getElementsByClassName('vvClose')[0]; if (element !== 'undefined' && element !== null && !!element) {element.click();}");

// map
//driver.executeScript("var element = document.getElementsByClassName('gm-style')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");
//driver.executeScript("var element = document.getElementsByClassName('map-area')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");

// komplixiertes map
//driver.executeScript("var element = document.getElementsByClassName('map-wrapper')[0]; if (element !== 'undefined' && element !== null && !!element) {element.parentNode.removeChild(element);}");