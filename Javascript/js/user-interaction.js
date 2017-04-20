"use strict";

(function () {

    var userResponse;

    do {
        var userName = prompt("What is your name?");

    } while (userName === "");

    if (userName === null) {
        alert("Welcome, Guest!");
    } else {
        alert("Welcome, " + userName + "!");
    }

    switch (prompt("Which pizza do you like?")) {
        case "pepperoni":
            alert("Typical!");
            break;
        case "veggie":
            alert("Hmmm...Health Nut huh??");
            break;
        case "cheese":
            alert("Nice and simple, I like it!");
            break;
        case "meat lovers":
            alert("You are a REAL MAN!");
            break;
        case "canadian bacon":
            alert("Good pizza, eh?");
            break;
        default:
            alert("That's....strange...");
    }
})();


// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.