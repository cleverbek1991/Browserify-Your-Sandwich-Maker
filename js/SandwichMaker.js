'use strict';

// Private variable to store the price
var totalPrice = 0;
var toppings = [];

// Return the public interface that other code can interact with

let addTopping = function(toppingPrice, topping) {
    totalPrice += toppingPrice;
    toppings.push(topping);
    return toppings;
};

let getSandwich = function() {
    return toppings.reduce(function(a, b) {
        return a + ', ' + b;
    });
};

let getPrice = function() {
    return totalPrice;
};

module.exports = { addTopping, getSandwich, getPrice };
