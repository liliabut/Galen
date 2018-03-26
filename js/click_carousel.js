this.HomePage = $page("Home page", {
  carouselBottom: "xpath: //div[@class='carousel-nav rightBottom']/a[@class='next']", // css locator
  carouselTop: "xpath: //div[@class='has-swipe content-carousel-slider l-slide']/div[@class='carousel-nav leftTop']/a[@class='next']", // css locator

  load: function () {
    this.open("http://vr.de");
    
    return this.waitForIt();
  },
  clickCarousel: function () {
    this.carouselTop.click();
    this.carouselBottom.click();
  }
});

// now you can use it like this
var homePage = new HomePage(driver).load();

homePage.clickCarousel();