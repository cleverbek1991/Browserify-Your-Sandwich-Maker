'use strict';

var veggiePrices = { 'tomato': 0, 'lettuce': 0, 'onion': 0 };

let addVeggie = function(veggie) {
    var priceOfVeggie = 0;
    for (let type in veggiePrices) {
        if (veggie == type) {
            priceOfVeggie = veggiePrices[type];
        }
    }

    return priceOfVeggie;

};


module.exports = { addVeggie };
