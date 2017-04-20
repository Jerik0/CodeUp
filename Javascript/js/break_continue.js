
"use strict";

    var i, rando;

    do {
        rando = Math.floor((Math.random() * 50) + 1);
    } while (rando % 2 === 0);

    console.log("Random odd number to skip is " + rando);

    for (i=1; i<=100; i+=2) {
        if (rando === i) {
            console.log("Whoopsie, skipping number " + rando + "!");
            continue;
        }
        console.log("Here is an odd number " + i);
        if (i >= 49) {
            break;
        }
    }


// Second Attempt at same exercise
//     var i, random;
//
//     do {
//         random = (Math.floor(Math.random() * 50) + 1);
//     } while
