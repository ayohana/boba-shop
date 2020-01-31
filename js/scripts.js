// Back-end Logic --------------------
function Boba(){
  this.toppings = [];
  this.size = "";
}

Boba.prototype.addToppings = function(selectedToppings){
  this.toppings.push(selectedToppings);
}

Boba.prototype.addSize = function(selectedSize){
  this.size += selectedSize;
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