'use strict';

var condimentPrices = { 'ketchup': 0, 'mustard': 0, 'mayo': 0 };

let addCondiment = function(condiment) {
    var priceOfCondiment = 0;
    for (let type in condimentPrices) {
        if (condiment == type) {
            priceOfCondiment = condimentPrices[type];
        }
    }

    return priceOfCondiment;

};

module.exports = { addCondiment };
