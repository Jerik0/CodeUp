(function(){
    "use strict";

    var person = {

        firstName: "Jonathan",
        lastName: "Carrico",

    }

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());

//---------------------------------------------------
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay, each. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

//---------------------------------------------------
    shoppers.forEach(function(shopper) {
        if (shopper.amount>=200) {
            var originalAmount = shopper.amount.toFixed(2);
            var appliedDiscount = (originalAmount) - (shopper.amount * .35);
            console.log(shopper.name + "Bought $" + originalAmount + " worth of product.");
            console.log(shopper.name + " Amount with discount: $" + appliedDiscount.toFixed(2) + ".");
        } else {
            var originalAmount = shopper.amount.toFixed(2);
            console.log (shopper.name + " Paid the Amount: $" + originalAmount + " with no discount... Sorry, " + shopper.name + ".");
        }
        console.log("-------------------------");
    });

//---------------------------------------------------

    // todo:

    var books = [
        {
            title: "Hitchhiker's Guide to The Galaxy",
            author: {firstname: "Douglas", lastname: "Adams"}
        },
        {
            title:"Slaughterhouse Five",
            author: {firstname: "Kurt", lastname: "Vonnegut"}
        },
        {
            title:"On Intelligence",
            author: {firstname: "Jeff", lastname: "Hawkins"}
        },
        {
            title:"The Object-Oriented Thought Process",
            author: {firstname: "Matt", lastname: "Weisfield"}
        },
        {
            title:"A Game of Thrones",
            author: {firstname: "George", lastname: "R. R. Martin"}
        }
    ]

    // console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function (info, index) {
        console.log("Book #" + (index+1));
        console.log("Title: " + info.title);
        console.log("Author: " + info.author.firstname + " " + info.author.lastname);
        console.log("---");
    })

// end loop here
})();
