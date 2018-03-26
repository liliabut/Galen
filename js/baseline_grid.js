this.divide8width = function () {
   var width = find("body").width();

   if (width % 8 == 0)
      {return width}
   else {return 0}
};

this.divide8height = function () {
   var height = find("body").height();

   if (height % 8 == 0)
      {return height}
   else {return 0}
};