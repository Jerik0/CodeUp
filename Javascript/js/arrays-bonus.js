(function () {
    "use strict";

    var menus = ["Pizza", "Salad", "Burgers", "Casserole", "Cookie Sandwiches", "Spaghetti", "Chicken", "Lasagna", "Tacos!!", "Burritos", "Fish", "Veggies"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var i;

    for (i = 0; i < days.length; i++) {
        var random = Math.floor(Math.random() * menus.length);
        var selected = menus.splice(random, 1);
        console.log(days[i] + " - " + selected);
    }

//-------------------------------------------------------------
        //BONUS ACTIVITY #2: Game Simulator


        var score = ["Strike", "Score"];
        score.forEach (function(attmept) {
            var random = Math.floor(Math.random() * (score.length+1));
            console.log(random);
        });

    // function twelveToTwentyFour(time) {
    //     var twelveHourString = twentyFourHourArray
    //     if (time === ) {
    //
    //     }
    // }

})();
