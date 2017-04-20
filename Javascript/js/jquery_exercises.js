"use strict";

$(document).ready(function(){

    var contentsH1 = $('#first-header').text();

    $('li').css('font-size', '20px');

    $('li, h1, p').css('color', 'blue');

    alert(contentsH1);

});