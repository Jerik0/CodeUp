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
        $('#player').text('Player One Start!');
    })

    // if (gameBoard.opacity == '1') {
        $('.row').click(function() {
            if ($(this).text() == '') {
                if (i == '0') {
                    console.log(this);
                    $(this).text('X').css('color', '#ff6f4b');
                    $(this).css("border", "1px solid #ff6f4b");
                    $('#player').text('Player Two Turn');
                    i++;
                } else if (i == '1') {
                    $(this).text('O').css('color', '#3d8aff');
                    $(this).css("border", "1px solid #3d8aff");
                    $('#player').text('Player One Turn');
                    i--;
                }
            }
        });
    // }
});
