'use strict';

  var breadPrices = {'white': 1.25, 'wheat': 1.75, 'italian': 1.50};

  let addBread = function(bread) {
  	var priceOfBread = 0;
  	for (let type in breadPrices) {
  		if (bread == type) {
  			priceOfBread = breadPrices[type];
  		}
  	}

    return priceOfBread;

  };

module.exports = {addBread};