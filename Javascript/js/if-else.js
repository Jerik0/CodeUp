"use strict";

//Grades Average
var gradeaverage = (70 + 80 + 95) / 3;

if (gradeaverage > 80) {
    console.log ("You're awesome");
} else {
    console.log ("You need to practice more.");
}

//HEB Discount Offer
var names = ["Cameron", "George", "Ryan"]
var productprices = [250, 320, 180];

for (var i=0; i<names.length; i+=1) {
    if (productprices[i] > 200) {
        var finalprice = productprices[i] - (productprices[i] * .35);
        console.log(names[i] + " bought $" + productprices[i].toFixed(2) + " worth of products. Final payment, after discount, is $" + finalprice.toFixed(2));
    } else {
        console.log(names[i] + " bought $" + productprices[i].toFixed(2) + " worth of products. Final payment is $" + productprices[i].toFixed(2));
    }
}

//Indecisive Friend
var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin) {
    console.log ("Buy a House");
} else {
    console.log ("Buy a car");
}

for (var i=0; i<names.length; i+=2) {
    console.log(names[i]);
}
