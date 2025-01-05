/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */
/* https://devdocs.io/*/



const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"

setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
setTimeout(myArray.myMethod, 2.0 * 1000, "1"); // prints "undefined" after 2 seconds