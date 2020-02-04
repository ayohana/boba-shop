// Back-end Logic --------------------
export function Drink() {
  this.quantity = 0;
  this.toppings = [];
  this.size = "";
  this.sugar = 100;
  this.price = 3;
}

Drink.prototype.addQuantity = function(number) {
  this.quantity += number;
  this.price *= number;
}

Drink.prototype.assignToppings = function(selectedToppings) {
  this.addToppingCost(selectedToppings);
  this.toppings.push(selectedToppings);
}

Drink.prototype.assignSize = function(selectedSize) {
  this.size += selectedSize;
  this.addSizeCost();
}

Drink.prototype.assignSugar = function(selectedSugar) {
  this.sugar = selectedSugar;
}

Drink.prototype.addToppingCost = function(topping) {
  if (topping === "Egg Pudding") {
    this.price += 1;
  } else {
    this.price += 0.50;
  }
}

Drink.prototype.addSizeCost = function() {
  if (this.size === "Medium") {
    this.price += 0.50;
  } else if (this.size === "Large") {
    this.price += 1;
  }
}

