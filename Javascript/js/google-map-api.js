(function () {

    "use strict";

    var address = document.getElementById('address-input');
    var addressButton = document.getElementById('address-get');
    var geocoder = new google.maps.Geocoder();
    var mapOptions = {
        zoom: 18,

        center: {
            lat: 29.426791,
            lng: -98.489602
        },

    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var pinPosition = {lat: geocoder.results[0].geometry.location.lat(), lng: geocoder.results[1].geometry.location.lng()};
    var marker = new google.maps.Marker({
        position: pinPosition,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: "Changing the world, one programmer at a time."
    });

    infowindow.open(map, marker);

    function getAddress() {
        var pinPosition = {lat: this.results[0].geometry.location.lat(), lng: this.results[1].geometry.location.lng()};
        var marker = new google.maps.Marker({
            position: pinPosition,
            map: map
        });
        geocoder.geocode({"address": address.value}, function (results, status) {
            if (status == "OK") {
                console.log('testing');
                map.setCenter(results[0].geometry.location);
                marker;
            } else {
                alert("whoops something broke. Status: " + status);
            }
        });
    }

    addressButton.addEventListener('click', getAddress);

})();
