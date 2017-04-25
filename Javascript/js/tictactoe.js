"use strict";
$(document).ready(function() {

   var i = 0;

   var x = '\u2717';

   var o = '\u25EF';

   var gameBoard = $('#gameboard');
   var startGame = $('#game-start');

    startGame.click(function() {
        startGame.animate({
            opacity: 0
        });
        gameBoard.animate({
            opacity: 1
        });
        console.log(gameBoard.opacity);
    })

    // if (gameBoard.opacity == '1') {
        $('.row').click(function() {
            if ($(this).text() == '') {
                if (i == '0') {
                    console.log(this);
                    $(this).text(x);
                    $(this).css("border", "1px solid red");
                    i++;
                } else if (i == '1') {
                    $(this).text(o);
                    $(this).css("border", "1px solid red");
                    i--;
                }
            }
        });
    // }
});
