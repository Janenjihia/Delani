$(document).ready(function(){
  $(".design1").click(function(){
    $(".design1").hide(1200);
    $(".para1").toggle(1200);
    $(".para1").show(1200);
  })
  $(".para1").click(function(){
    $(".para1").hide(1200);
    $(".design1").toggle(1200);
    $(".design1").show(1200);
  });
});
$(document).ready(function(){
  $(".development").click(function(){
    $(".development").hide(1200);
    $(".para2").toggle(1200);
    $(".para2").show(1200);
  })


  $(".para2").click(function(){
    $(".para2").hide(1200);
    $(".development").toggle(1200);
    $(".development").show(1200);
  });
});
$(document).ready(function(){
  $(".management").click(function(){
    $(".management").hide(1200);
    $(".para3").toggle(1200);
    $(".para3").show(1200);
  })
  $(".p3").click(function(){
    $(".p3").hide(1200);
    $(".management").toggle(1200);
    $(".management").show(1200);
  });
});