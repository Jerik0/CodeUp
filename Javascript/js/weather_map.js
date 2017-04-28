$(document).ready(function() {

    "use strict";

    var cityName = $('#city-name');
    var cityInput = $('#city-input');
    var map = new google.maps.Map($('#map')[0], {
        center: {lat: 40.003643, lng: -75.142849},
        zoom: 10
    });
    var pos;
//---------------------------------------------------------------

    //Function to Retrieve weather information from OpenWeatherMap
    function getWeather(lat, long, zip) {

        //Retrieves data from Open Weather Map
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily",
            type: "GET",
            data: {
                APPID: "cfdaa9b51b09b5239ab50c12797419d3",
                q: cityInput.val(),
                units: "imperial",
                lat: lat,
                lon: long,
                zip: zip
            }
            }).done(function(data, status) {
               buildWeather(data);
            });
    }
//---------------------------------------------------------------

    //Functionality to create new instance of Google Map from Google API.
    function initMap() {

        var map = new google.maps.Map($('#map')[0], {
            center: pos,
            zoom: 10
        });

        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            draggable: true
        });

        //This forces the marker--once user has dragged it-- to input its current latitude and longitude into the variables 'lat' and 'lng' respectively. It will then center the map on those coordinates and send the coordinates to the getWeather function.
        google.maps.event.addListener(marker, 'dragend', function() {
            var lat = this.getPosition().lat();
            var lng = this.getPosition().lng();
            map.setCenter({lat: lat, lng: lng});
            divDeleter();
            getWeather(lat, lng);
        });
    }

//---------------------------------------------------------------

    //Function for displaying received data passed in from function "getWeather"
    function buildWeather(data){

        //Put City Name Results as the City Name h2 element.
        cityName.text(data.city.name);

        //Put latitude and longitude from the current city into the variable 'pos'.
        pos = {lat: data.city.coord.lat, lng: data.city.coord.lon};

        //Create a loop that loops three times, and each time, adds specified information into a <div> element named "test-info".
        for(var i=0; i<=2; i++) {
            $('#test-info').append('<div class="info-box">' + '<p>' + data.list[i].temp.min+String.fromCharCode(176) + '/ ' + data.list[i].temp.max+String.fromCharCode(176) + '</p>' + '<p>' + 'Clouds: ' + data.list[i].weather[0].description + '</p>' + '<img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"' + '>' + '<p>' + 'Humidity: ' + data.list[i].humidity + '</p>' + '<p>' + 'Wind: ' + data.list[i].speed + '</p>' + 'Pressure: ' + data.list[i].pressure + '</p>' + '</div>');
        }

        //Re-creates the map
        initMap();

        //Console.logs data from ajax request for inspection/debugging.
        console.log(data);
    }

//---------------------------------------------------------------
    //Function for deleting content of div "test-info" which contains all three divs from loop.
    function divDeleter() {
        $('#test-info').html('');
    }

    //Function for clearing out the value of the city-input. This way the 'city query' section of the ajax request (that's inside the function "getWeather") doesn't continue giving the same city after the marker has been dragged and dropped.
    function clearCity() {
        cityInput.val('');
    }

//---------------------------------------------------------------
//     BUTTONS FUNCTIONALITY

    //Listens for an "Enter" keypress on the document and executes specified functions.
    $(document).keyup(function(e){

        if (e.keyCode === 13) {
            console.log("it worked");
            divDeleter();
            getWeather();
            clearCity();
            }
        });

    //Display newly input information when "Go!" button is clicked.
    $('#get-info').click(function() {

        //Executes the function "divDeleter"
        divDeleter();

        //Executes the function "getWeather"
        getWeather();

        //Executes the function "clearCity"
        clearCity();

    });

//---------------------------------------------------------------
    //Initializes the function "getWeather"
    getWeather();

});
