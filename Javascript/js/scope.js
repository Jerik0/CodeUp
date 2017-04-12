"use strict";

var myNameIs = 'Jonathan'; // TODO: Fill in your name here.

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Jonathan, Lord of the seals")
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

var helloMessage = sayHello(myNameIs);

console.log(helloMessage);

/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random()*100)+1);

function isOdd(input) {
    var message = (input % 2 === 0) ? console.log(input + " is EVEN") : console.log(input + " is ODD!");
}

isOdd(40);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 */

isOdd(random);

/**
 * TODO:
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
