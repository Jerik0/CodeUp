"use strict";

//Multiplication Table
var multiplier = Math.floor(Math.random() * 10) + 1;

var i;

for (i = 1; i <= 10; i++) {
    console.log(multiplier + "x" + (i) + "=" + multiplier * i)
}

//Odd-Even Determination

i = 0;

for (i=0; i<=10; i++) {
    var randomgen = Math.floor(Math.random() * 180) + 20;
    //console.log(i);
    if (randomgen % 2 == 0) {
        console.log(randomgen + " is even.");
    } else {
        console.log(randomgen + " is odd.");
    }
}

//Bonus Exercise

var list = "<ul>\n"

for(var i = 0; i < 5; i++){
    var random = (Math.floor(Math.random() * 10) + 10);
    list += "<li>Random " + random + "</li>";
}

list += "</ul>";
console.log(list);
document.write(list);