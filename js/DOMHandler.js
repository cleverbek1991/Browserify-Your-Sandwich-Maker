'use strict';
var finalSandwichPrice = 0;

let cheeseType = require('./cheese'),
    meatType = require('./Meat'),
    veggieType = require('./veggies'),
    condimentType = require('./condiments'),
    breadType = require('./bread'),
    SandwichMaker = require('./SandwichMaker');


// Variable to hold topping that the user selects
var selectedTopping;
var price = 0;

// Get a reference to the <select> element that has all the meat options
var meat = document.getElementById("meat");
var bread = document.getElementById("bread");
var cheese = document.getElementById("cheese");
var veggies = document.getElementById("veggie");
var condiments = document.getElementById("condiment");
var submit = document.getElementById("submit");
var display = document.getElementById("display");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

submit.addEventListener("click", (event) => {
    var priceOfSandwich = SandwichMaker.getSandwich();
    display.innerHTML = priceOfSandwich + "<br>$" + finalSandwichPrice;

});

meat.addEventListener('change', (event) => {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;
    let priceOfMeat = meatType.addMeat(selectedTopping);
    finalSandwichPrice += priceOfMeat;
    SandwichMaker.addTopping(price, selectedTopping);
});

bread.addEventListener('change', (event) => {
    selectedTopping = event.target.value;
    let priceOfBread = breadType.addBread(selectedTopping);
    finalSandwichPrice += priceOfBread;
    SandwichMaker.addTopping(price, selectedTopping);
});

cheese.addEventListener('change', (event) => {
    selectedTopping = event.target.value;
    let priceOfCheese = cheeseType.addCheese(selectedTopping);
    finalSandwichPrice += priceOfCheese;
    SandwichMaker.addTopping(price, selectedTopping);
});

veggies.addEventListener('change', (event) => {
    selectedTopping = event.target.value;
    let priceOfVeggies = veggieType.addVeggie(selectedTopping);
    finalSandwichPrice += priceOfVeggies;
    SandwichMaker.addTopping(price, selectedTopping);
});

condiments.addEventListener('change', (event) => {
    selectedTopping = event.target.value;
    let priceOfCondiments = condimentType.addCondiment(selectedTopping);
    finalSandwichPrice += priceOfCondiments;
    SandwichMaker.addTopping(price, selectedTopping);
});
