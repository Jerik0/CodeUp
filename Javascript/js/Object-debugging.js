(function() {
    'use strict';

    var pizza = {
        toppings: ['pepperoni', 'green peppers', 'onions'],
        crust: 'stuffed',
        delivery: true,
    };

// output the type of crust for the pizza
    console.log('The type of crust for the first pizza: ');

    console.log(pizza.crust);

//////////////////////////////////////////////////////////
// When you are finished with the above part, uncomment //
// everything until the next comment block              //
//////////////////////////////////////////////////////////

    var orders = [
        {
            toppings: ['pepperoni', 'green peppers', 'onions'],
            crust: 'stuffed',
            delivery: true,
            price: 1295,
        },
        {
            toppings: ['onion', 'salami'],
            crust: 'pretzel',
            delivery: false,
            price: 1195,
        },
        {
            toppings: ['pineapple', 'ham'],
            crust: 'regular',
            delivery: true,
            specialInstructions: 'extra crispy crust',
            price: 995,
        }
    ];

    console.log('Here are the different crust types for each order: ');
    orders.forEach(function (orders) {
        console.log(orders.crust)
    });

////////////////////////////////////////////////////////////////////
//When you are finished with the section above, uncomment the rest//
////////////////////////////////////////////////////////////////////

    console.log('--------------------------------------------------');
    console.log(' > Orders For Delivery');
    console.log('--------------------------------------------------');

// output information about all the orders for delivery
    for (var index = 0; index < orders.length; index += 1) {
        var order = orders[index];

        // if an order is not for delivery, skip it
        if (!order.delivery) {
            continue;
        }

        var orderNumber = index + 1;
        var formattedPrice = '$' + (order.price / 100).toFixed(2);

        // output the order number
        console.log('--- Order # ' + orderNumber + ' ---');
        console.log('Toppings');
        // output all the toppings for the order
        order.toppings.forEach(function (topping) {
            console.log('- ' + topping);
        });

        console.log('Crust: ' + order.crust);
        // output the special instructions, if there are any
        if (order.specialInstructions) {
            console.log('Special Prep: ' + order.specialInstructions);
        }

        console.log('Total: ' + formattedPrice);
    }

})();