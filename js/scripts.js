// Back-end Logic --------------------
function Boba(){
  this.toppings = [];
  this.size = "";
  this.price = 3;
}

Boba.prototype.addToppings = function(selectedToppings){
  this.price += 0.50;
  this.toppings.push(selectedToppings);
}

Boba.prototype.addSize = function(selectedSize){
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
$(document).ready(function(){
  var testDrink = new Boba();

  $("form#drinkOrder").submit(function(event){
    event.preventDefault();
    $("#output").show();
    $("input:checkbox[name=toppingOptions]:checked").each(function(){
      var toppingSelected = $(this).val();
      testDrink.addToppings(toppingSelected);
    })

    var sizeSelected = $("input:radio[name=sizeOptions]:checked").val();
    testDrink.addSize(sizeSelected);
    console.log(testDrink);

  });


});