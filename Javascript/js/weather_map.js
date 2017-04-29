$(document).ready(function() {

    "use strict";

    var cityName = $('#city-name');

    var cityInput = $('#city-input');



    var geoCodeIt = new google.maps.Geocoder;

    var styledMapType = new google.maps.StyledMapType(
        [
        {"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]}, {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}
        ],
        {name: 'styled map'});

    var map = new google.maps.Map($('#map')[0], {
        center: {lat: 29.427038, lng: -98.489576},
        zoom: 15,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map']
        }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    var marker = new google.maps.Marker({
        position: map.center,
        map: map,
        draggable: true
    });
    var pos;

//---------------------------------------------------------------
    //Function to retrieve new coordinates from dropped Marker
    function markerDrop(marker) {
        google.maps.event.addListener(marker, 'dragend', function() {
            var lat = this.getPosition().lat();
            var lng = this.getPosition().lng();
            map.setCenter({lat: lat, lng: lng});
            map.zoom = 13;
            divDeleter();
            geoCoder(3);
        });
    }

//---------------------------------------------------------------

    //Functionality to create new instance of Google Map from Google API.
    function initMap() {

        var map = new google.maps.Map($('#map')[0], {
            center: pos,
            zoom: 15,
            mapTypeControlOptions: {
                mapTypeIds: ['styled_map']
            }
        });

        marker.setMap(map);
        marker.setPosition(pos);

        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        //This forces the marker--once user has dragged it-- to input its current latitude and longitude into the variables 'lat' and 'lng' respectively. It will then center the map on those coordinates and send the coordinates to the getWeather function.
        markerDrop(marker);
    }
//---------------------------------------------------------------

    //Function to Geocode address or place from '#city-input'.
    function geoCoder(cnt) {
        console.log("Geocoder fired");
        if(cityInput.val()) {
            geoCodeIt.geocode({'address': cityInput.val()},
                function (results, status) {
                    if (status == 'OK') {
                        map.setCenter(results[0].geometry.location);
                        new google.maps.Marker({
                            postion: results[0].geometry.location,
                            map: map
                        });
                        console.log(cnt);
                        getWeather(results[0].geometry.location.lat(), results[0].geometry.location.lng(), cnt);
                    } else {
                        console.log("Geocode wasn't successful for reason: " + status);
                    }
                });
        } else{
            getWeather(marker.position.lat(), marker.position.lng(), cnt);
        }
    }

//---------------------------------------------------------------

    //Function to Retrieve weather information from OpenWeatherMap
    function getWeather(lat, long, cnt) {
        //Retrieves data from Open Weather Map
        console.log(cnt);
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily",
            type: "GET",
            data: {
                APPID: "cfdaa9b51b09b5239ab50c12797419d3",
                units: "imperial",
                lat: lat,
                lon: long,
                cnt: cnt
            }
        }).done(function(data, status) {
           buildWeather(data, cnt);
        });
    }

//---------------------------------------------------------------

    //Function for displaying received data passed in from function "getWeather"
    function buildWeather(data, cnt){

        console.log(data.list[1].temp.min);
        //Put City Name Results as the City Name h2 element.
        cityName.text(data.city.name);
        var content = "";
        //Put latitude and longitude from the current city into the variable 'pos'.
        pos = {lat: data.city.coord.lat, lng: data.city.coord.lon};

        //Create a loop that loops three times, and each time, injects a <div> with specified information into a <div> element named "test-info".
        for(var i=0; i < data.list.length; i++) {
            content += '<div class="day">';
            content += '<p>' + data.list[i].temp.min + String.fromCharCode(176) + '/ ';
            content += data.list[i].temp.max  + String.fromCharCode(176) + '</p>';
            content += '<p>' + 'Clouds: ' + data.list[i].weather[0].description + '</p>';
            content += '<img src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png">';
            content += '<p>' + 'Humidity: ' + data.list[i].humidity + '</p>';
            content += '<p>' + 'Wind: ' + data.list[i].speed + '</p>';
            content += '<p>' + 'Pressure: ' + data.list[i].pressure + '</p>' + '</div>';
        }
        $('#test-info').html(content);

        switch(cnt) {
            case 3:
                $('.day').addClass('info-box');
                break;
            case 5: $('.day').addClass('info-box-med');
                break;
            case 7:
                $('.day').addClass('info-box-sm');
                break;
        }
        //Re-creates the map with updated information.
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

    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    google.maps.event.addListener(map, "click", function(event) {
        placeMarker(event.latLng);
    });

//---------------------------------------------------------------
//     BUTTONS FUNCTIONALITY

    //Listens for an "Enter" keypress on the document and executes specified functions.
    $(document).keyup(function(e){

        if (e.keyCode === 13) {
            divDeleter();
            geoCoder(3);
            clearCity();
            }
        });

    $('#3-day-frcst').click(function() {
        geoCoder(3);

    });

    $('#5-day-frcst').click(function() {
        geoCoder(5);


    });

    $('#7-day-frcst').click(function() {
        geoCoder(7);


    });

    //Display newly input information when "Go!" button is clicked.
    $('#get-info').click(function() {
        console.log("click fired");
        //Executes the function "divDeleter"
        divDeleter();

        //Executes the function "geoCoder"
        geoCoder(3);

        //Executes the function "clearCity"
        clearCity();

    });


//---------------------------------------------------------------
//  testing geoCoder object stuff
});
