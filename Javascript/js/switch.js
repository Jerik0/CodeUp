"use strict";

var luckynumber = Math.floor(Math.random()* 6);

var calendar = Math.round(Math.random()* 12)+1;

var purchase = 60;

var total;


// Lucky Number Discounts
switch (luckynumber) {
    case 1:
        total = purchase * .90;
        console.log("It's your lucky day! You get a 10% discount! After discount, our purchase totals to: $" + total.toFixed(2));
        break;
    case 2:
        console.log("It's your lucky day! You get a 25% discount!");
        total = purchase * .75;
        console.log ("Your purchase totals to: $" + total.toFixed(2));
        break;
    case 4:
        total = purchase * .50;
        console.log("It's your lucky day! You get a 50% discount!! Whaaaaat? Your total is $" + total.toFixed(2) + "!");
        break;
    case 5:
        total = 0;
        console.log("Okay you're gonna love this. You owe us NOTHING!! Your total is $" + total.toFixed(2));
        break;
    default:
        console.log("Sorry no discount today! Your total is $" + purchase.toFixed(2));
}

//Calendar Month Naming
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