"use strict"

$(document).ready(function(){

    //create the array containing the keycodes for each key press we want
    var cheatCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

    //declare our 'counting' variable
    var i= 0;

    $(document).keyup(function(e){

        //if the key pressed corresponds to the index in the array
        if (e.keyCode === cheatCode[i]){
            //we increment the 'counting' variable by 1
            i++;
            //and we log to the console each time we're successful.
            console.log('good...');
        } else {
            //if we get something wrong, it alerts this message
            alert('Did you have no childhood?');
            //and resets the counting variable to 0, therefore corresponding to the first index of the array once more.
            i=0;
        };
        //once the counting variable equals the total length of our array,
        if (i === cheatCode.length) {
            //we complete this code.
            alert('you win');
        }





    });
})
