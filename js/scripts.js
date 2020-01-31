// Back-end Logic --------------------
function Drink() {
  this.toppings = [];
  this.size = "";
  this.price = 3;
}

Drink.prototype.addToppings = function(selectedToppings) {
  this.price += 0.50;
  this.toppings.push(selectedToppings);
}

Drink.prototype.addSize = function(selectedSize) {
  this.size += selectedSize;
  if (selectedSize === "Medium") {
    this.price += 0.50;
  } else if (selectedSize === "Large") {
    this.price += 1;
  } else {
    this.price = this.price;
  }
}

// Front-end Logic --------------------
function gatherInput(drink) {
  event.preventDefault();
  $("input:checkbox[name=toppingOptions]:checked").each(function() {
    var toppingSelected = $(this).val();
    drink.addToppings(toppingSelected);
  })
  var sizeSelected = $("input:radio[name=sizeOptions]:checked").val();
  drink.addSize(sizeSelected);
  return drink;
}

$(document).ready(function() {
  var testDrink = new Drink();
  $("form#drinkOrder").submit(function(event) {
    console.log(gatherInput(testDrink));
  });
  


});