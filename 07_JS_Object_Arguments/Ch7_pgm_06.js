// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "> ==================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
 
  var spaces = function (numSpaces) {
    numSpaces = Math.max(0, numSpaces);
    numSpaces = Math.min(40, numSpaces);
    return Array(numSpaces + 1).join(" ");
};

  
  var emptyBox = function (width) {
    width = Math.max(0, width);
    width = Math.min(40, width);
    var topBottomLine = "> =" + Array(width + 1).join("=") + "=";
    var middleLine = "> =" + spaces(width) + "=";
    console.log(topBottomLine);
    for (var i = 0; i < 3; i++) {
        console.log(middleLine);
    }
    console.log(topBottomLine);
};

emptyBox(12);

  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */