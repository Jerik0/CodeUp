(function(){
    "use strict";

    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift("The Sun");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var findEarth = planets.indexOf("Earth");
    console.log("Here is the index of Earth: " + findEarth);
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log('Using splice to remove the planet after "Earth".');
    planets.splice(3,1);
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log("Sorting the planets array.");
    planets.sort();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

})();
