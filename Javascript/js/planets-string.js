(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);

    var planetsBroken = planetsArray.join("<br>");

    console.log(planetsBroken);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var i=0;

    for (i=0; i<planetsArray.length; i++) {
        var planetsCounter = planetsArray[i];
        var planetsList = ("<li>" + planetsCounter + "</li>");
        var planetsWrapped = "<ul>" + planetsList + "</ul>";
        console.log(planetsWrapped);
    }

    // Bonus: Create a second string that would display your planets in an unordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();
