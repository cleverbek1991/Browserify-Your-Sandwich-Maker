'use strict';

var cheesePrices = { 'swiss': 2.00, 'cheddar': 1.25, 'american': 1.75 };

let addCheese = function(cheese) {
    var priceOfCheese = 0;
    for (let type in cheesePrices) {
        if (cheese == type) {
            priceOfCheese = cheesePrices[type];
        }
    }

    return priceOfCheese;

};

module.exports = { addCheese };
