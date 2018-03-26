rule("%{objectPattern} width is base 8", function (objectName, parameters) {
   var width = find(parameters.objectPattern).width();

   if (width % 8 == 0)
      {return true;}
   else {throw new Error("Error: width = " + width + " and is not divided by 8!");}
});

rule("%{objectPattern} height is base 8", function (objectName, parameters) {
   var height = find(parameters.objectPattern).height();

   if (height % 8 == 0)
      {return true;}
   else {throw new Error("Error: height = " + height + " and is not divided by 8!");}
});