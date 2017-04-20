(function () {
        "use strict";

        var names =["Jonathan", "Rox", "Tuesday", "Sarah"]

        for (var i = 0; i<names.length; i++) {
                console.log(names[i]);
        }

        names.forEach(function(element, index, array){

            console.log(element);
            console.log(index);
            // console.log(array);

        });


})();