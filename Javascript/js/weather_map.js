$(document).ready(function() {

    "use strict";

    var latLongButton = $('#lat-lng');
    var cityName = $('#city-name');
    var map;
    var pos;
//---------------------------------------------------------------

    // Functionality to Retrieve weather information from OpenWeatherMap and display it on page.
    function putWeather (lat, long) {

        if (lat === '' && long === '') {

        }

    //Functionality to retrieve data from Open Weather Map
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily",
            type: "GET",
            data: {
                APPID: "cfdaa9b51b09b5239ab50c12797419d3",
                q: $('#city-input').val(),
                units: "imperial",
                lat: lat,
                lon: long
            }
            }).done(function(data, status) {
               buildWeather(data);
            });
    }

    //Functionality to create new instance of Google Map from Google API.
    function initMap() {

        map = new google.maps.Map($('#map')[0], {
            center: pos,
            zoom: 10
        });

        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            draggable: true
        });

        google.maps.event.addListener(marker, 'dragend', function() {
            var lat = this.getPosition().lat();
            var lng = this.getPosition().lng();
            map.setCenter({lat: lat, lng: lng});


        });
    }

    function buildWeather(data){
        //Put City Name Results as the City Name h2 element.
        cityName.text(data.city.name);

        //Create a function that puts latitude and longitude from the current city into the variable 'pos'.
        pos = {lat: data.city.coord.lat, lng: data.city.coord.lon};


        //Create a loop that loops three times and each time, adds specified information into a <div> element.
        for(var i=0; i<=2; i++) {
            $('#test-info').append('<div class="info-box">' + '<p>' + data.list[i].temp.min+String.fromCharCode(176) + '/' + data.list[i].temp.max+String.fromCharCode(176) + '</p>' + '<p>' + 'Clouds: ' + data.list[i].weather[0].description + '</p>' + data.list[i].weather[0].icon + '<p>' + 'Humidity: ' + data.list[i].humidity + '</p>' + '<p>' + 'Wind: ' + data.list[i].speed + 'Pressure: ' + data.list[i].pressure + '</p>' + '</div>');
        }

        initMap();

        console.log(data);
    }
//---------------------------------------------------------------
//     BUTTONS FUNCTIONALITY
//     Display newly input information when "Go!" button is clicked.

    $('#get-info').click(function() {
        $('#test-info').html('');
        putWeather();
    });

//     Inject latitude and longitude values from input into API request;
    latLongButton.click(function() {

    });


//---------------------------------------------------------------
    putWeather();

});
