"use strict"

$(document).ready(function(){

    //create the array containing the keyCodes for each key press we want
    var cheatCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

    //declare our 'counting' variable, OUTSIDE of the document.keyup function, because if we declared it inside the function,
    var i= 0;

    var audio = $('#troll');

    //declaring an array of colors for the background color to change to.
    var colors = ['red', 'blue', 'yellow'];

    //declaring interval for use with activation
    var interval = 1000;



    $(document).keyup(function(e){


        //if the key pressed corresponds to the index in the array
            if (e.keyCode === cheatCode[i]) {
                //we increment the 'counting' variable by 1
                i++;

            } else {
                //if we get something wrong, this resets the counting variable to 0, therefore corresponding to the first index of the array once more.
                i = 0;
            };
            //once the counting variable equals the total length of our array,
            if (i === cheatCode.length) {
                //we complete this code.

                $('#header1').html('YOU WIN!');
                audio.get(0).play();

                $('#derpy').animate({
                    top: 100
                }, 5000);

                if (e.keyCode === 27) {
                    audio(0).pause();
                }
            }

    });

})
