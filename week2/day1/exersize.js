// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do.

function Rectangle(thisWidth, thisHeigth) {
    this.width = thisWidth;
    this.height = thisHeigth;
}

function getArea() {
    var multiplied = this.width * this.height;
    return multiplied;
}

var rect = new Rectangle(4, 5);
rect.getArea();

// function Square(widthHeight) {
//     this.width = widthHeight;
//     this.height = widthHeight;
// }

// var square = new Square(4);
// square.getArea();

// var rect = new Rectangle(4, 5);
// rect.getArea();

// Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here.

function invertCase(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] == str[i].toLowerCase()) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i].toLowerCase();
        }
    }
    return newString;
}

console.log(invertCase("Hello"));
