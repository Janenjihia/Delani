$(document).ready(function(){
  $(".design1").on('click',function(){
    $(".design1").show(1400);
    $(".explanation1").toggle(1400);
    $(".explanation1").hide(1400);
  })
  $(".explanation1").on('click',function(){
    $(".explanation1").show(1400);
    $(".design1").toggle(1400);
    $(".design1").hide(1400);
  });
});
$(document).ready(function(){
  $(".development").on('click',function(){
    $(".development").show(1400);
    $(".explanation2").toggle(1400);
    $(".explanation2").hide(1400);
  })


  $(".explanation2").on('click',function(){
    $(".explanation2").show(1400);
    $(".development").toggle(1400);
    $(".development").hide(1400);
  });
});
$(document).ready(function(){
  $(".management").on('click',function(){
    $(".management").show(1400);
    $(".explanation3").toggle(1400);
    $(".explanation3").hide(1400);
  })
  $(".explanation3").on('click',function(){
    $(".explanation13").show(1400);
    $(".management").toggle(1400);
    $(".management").hide(1400);
  });
});
$(document).ready(function(){
  $('.text').hover(function () {
  $(this).animate({opacity:'1'});
  },
  function () {
  $(this).animate({opacity:'0'});
})
});
$(document).ready(function(){
  $("form#submission").onSubmit('submit',function(event){
      event.preventDefault();
      let name = $("input:first").val();
      let email = $("input#mail").val();
      let message = $("textarea#message").val();
      if ($("input:first").val() && $("input#mail").val()){
          alert ("Hey " + name + ", Thanks we are glad to receive your message we will get back shortly");
      }
      else {
          alert("Please enter your valid name and email!");
      }
      event.preventDefault();
    })
});
