
(function () {
    "use strict";

    var myNameIs = 'Jonathan';

    function sayHello(name) {
        console.log("Hello, " + name + "!");
    }

    sayHello("Jonathan, Lord of the seals")

    var helloMessage = sayHello(myNameIs);

    console.log(helloMessage);

    var random = Math.floor((Math.random()*100)+1);

    function isOdd(input) {
        var message = (input % 2 === 0) ? console.log(input + " is EVEN") : console.log(input + " is ODD!");
    }

    isOdd(40);

    isOdd(random);

})();