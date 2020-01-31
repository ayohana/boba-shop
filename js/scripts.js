// Back-end Logic --------------------





// Front-end Logic --------------------
$(document).ready(function() {
  $("form#drinkOrder").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toppingOptions]:checked").each(function(){
      var toppingSelected = $(this).val();
      console.log(toppingSelected);
    })
  });

  // var flavor = $("input:radio[name=flavor]:checked").val();
});