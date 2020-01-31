// Back-end Logic --------------------
function Drink() {
  this.toppings = [];
  this.size = "";
  this.price = 3;
}

Drink.prototype.assignToppings = function(selectedToppings) {
  this.addToppingCost(selectedToppings);
  this.toppings.push(selectedToppings);
}

Drink.prototype.addToppingCost = function(topping) {
  if (topping === "Egg Pudding") {
    this.price += 1;
  } else {
    this.price += 0.50;
  }
}

Drink.prototype.assignSize = function(selectedSize) {
  this.size += selectedSize;
  this.checkSizeCost();
}

Drink.prototype.checkSizeCost = function() {
  if (this.size === "Medium") {
    this.price += 0.50;
  } else if (this.size === "Large") {
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
    drink.assignToppings(toppingSelected);
  })
  var sizeSelected = $("input:radio[name=sizeOptions]:checked").val();
  drink.assignSize(sizeSelected);
  return drink;
}

function checkAndDisplayOutput(drink) {
  $(".orderSuccess").show();
  $(".orderFail").hide();
  if (drink.toppings.length === 0) {
    $("#drinkItem").text("1 " + drink.size + " milk tea with NO TOPPING");
  } else {
    $("#drinkItem").text("1 " + drink.size + " milk tea with " + drink.toppings.join(", "));
  }
  $("#totalCost").text(drink.price.toFixed(2));
}

$(document).ready(function() {
  $("form#drinkOrder").submit(function(event) {
    var drink1 = new Drink();
    gatherInput(drink1);
    checkAndDisplayOutput(drink1);
  });
  
});