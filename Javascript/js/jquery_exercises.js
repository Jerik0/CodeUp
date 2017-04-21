"use strict";

$(document).ready(function(){

    var input = $('#input-one');
    var inputButton = $('#input-button');
    var buttonOne = $('#button-one');
    var buttonTwo = $('#button-two');
    var buttonThree = $('#button-three');

    buttonOne.click(function() {
        $('p').css('border', 'blue solid 1px');
    });

    buttonTwo.dblclick(function() {
        $('body').css('background-color', '#000');
        $('body').css('color', '#fff');
    });

    buttonThree.hover(function() {
        $('p').css('border', 'none');
        $('body').css('background-color', 'white');
        $('body').css('color', 'black');
    });

    inputButton.click(function() {
        if (input.val() === 'partytime') {
            $('body').css('background', 'blue');
        }
    });

});