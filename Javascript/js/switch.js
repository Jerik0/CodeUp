"use strict";

var luckynumber = Math.floor(Math.random()* 6);

var calendar = Math.round(Math.random()* 12)+1;

var purchase = 60;

switch (luckynumber) {
    case 0:
        console.log("Sorry, no discount this time...");
        console.log ("Your purchase totals to: $" + (purchase));
        break;
    case 1:
        console.log("It's your lucky day! You get a 10% discount! After discount, ");
        console.log ("your purchase totals to: $" + (purchase - (purchase * .10)));
        break;
    case 2:
        console.log("It's your lucky day! You get a 25% discount!");
        console.log ("Your purchase totals to: $" + (purchase - (purchase * .25)));
        break;
    case 3:
        console.log("Sorry, no discount this time...");
        console.log ("Your purchase totals to: $" + (purchase));
        break;
    case 4:
        console.log("It's your lucky day! You get a 50% discount!! Whaaaaat?");
        console.log ("Your original purchase was $" + purchase + ". Your purchase totals to: $" + (purchase - (purchase * .50)));
        break;
    case 5:
        console.log("Okay you're gonna love this. You owe us NOTHING!!");
        console.log ("Your original purchase was $" + purchase + ". Your purchase totals to: $" + (purchase - (purchase)));
        break;
    default:
        console.log("hmm that's weird...something went wrong!");
}

switch (calendar) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
}