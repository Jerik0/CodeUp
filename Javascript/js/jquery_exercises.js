"use strict";

$(document).ready(function(){

    var input = $('#input-one').text();
    var inputButton = $('#input-button');

    $('#button-one').click(function() {
        $('p').css('border', 'blue solid 1px');
    });

    $('#button-two').dblclick(function() {
        $('body').css('background-color', '#000');
        $('body').css('color', '#fff');
    });

    $('#button-three').hover(function() {
        $('p').css('border', 'none');
        $('body').css('background-color', 'white');
        $('body').css('color', 'black');
    });

    console.log(input);
    if (input === 'partytime') {
        $('body').css('background', 'blue');
    }
});