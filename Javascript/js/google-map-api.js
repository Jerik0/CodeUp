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

    // var locationInfo =


    var infowindow = new google.maps.InfoWindow({
        content: "Eventually this will be unique to the address..."
    });

    function getAddress() {

        geocoder.geocode({"address": address.value}, function (results, status) {
            var pinPosition = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
            };
            var marker = new google.maps.Marker({
                position: pinPosition,
                map: map
            });

            infowindow.open(map, marker);

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
