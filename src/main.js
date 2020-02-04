import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Drink } from "../src/boba-shop.js";


// Front-end Logic --------------------
function gatherInput(drink) {
  event.preventDefault();
  $("input:checkbox[name=toppingOptions]:checked").each(function() {
    var toppingSelected = $(this).val();
    drink.assignToppings(toppingSelected);
  })
  var sizeSelected = $("input:radio[name=sizeOptions]:checked").val();
  drink.assignSize(sizeSelected);
  var sugarSelected = parseInt($("input:radio[name=sugarLevel]:checked").val());
  drink.assignSugar(sugarSelected);
  var quantityEntered = parseInt($("#drinkQuantity").val());
  drink.addQuantity(quantityEntered);
  return drink;
}

function checkAndDisplayOutput(drink) {
  $(".orderSuccess").show();
  $(".orderFail").hide();
  if (drink.toppings.length === 0) {
    $("#drinkItem").text(drink.quantity + " " + drink.size +
    " milk tea with " + drink.sugar + "% Sugar + NO TOPPING");
  } else {
    $("#drinkItem").text(drink.quantity + " " + drink.size +
    " milk tea with " + drink.sugar + "% Sugar + " + drink.toppings.join(", "));
  }
  $("#totalCost").text(drink.price.toFixed(2));
}

$(document).ready(function() {
  $("#imgWelcomeDrink").slideDown(2000);

  $("form#drinkOrder").submit(function(event) {
    event.preventDefault();
    var drink1 = new Drink();
    gatherInput(drink1);
    checkAndDisplayOutput(drink1);
    console.log(drink1);
  });
  
});