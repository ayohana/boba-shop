// Back-end Logic --------------------





// Front-end Logic --------------------
$(document).ready(function() {
  $("form#drinkOrder").submit(function(event){
    event.preventDefault();
    $("#output").show();
    $("input:checkbox[name=toppingOptions]:checked").each(function(){
      var toppingSelected = $(this).val();
      $("#output").append(toppingSelected + "<br>");
    })

    var sizeSelected = $("input:radio[name=sizeOptions]:checked").val();
    $("#output").append(sizeSelected);

  });


});