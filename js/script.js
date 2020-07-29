//modal logic 
$("#realtorButton").click(function(){
  $('#realtorModal').modal('show');
});

//p text on hover logic 
$(".card1").hover(function(){
  $(".card1 p").css("color", "white");
  }, function(){
  $(".card1 p").css("color", "black");
});

$(".card2").hover(function(){
  $(".card2 p").css("color", "white");
  }, function(){
  $(".card2 p").css("color", "black");
});

$(".card3").hover(function(){
  $(".card3 p").css("color", "white");
  }, function(){
  $(".card3 p").css("color", "black");
});

$(".card4").hover(function(){
  $(".card4 p").css("color", "white");
  }, function(){
  $(".card4 p").css("color", "black");
});

$(".card5").hover(function(){
  $(".card5 p").css("color", "white");
  }, function(){
  $(".card5 p").css("color", "black");
});

$(".card6").hover(function(){
  $(".card6 p").css("color", "white");
  }, function(){
  $(".card6 p").css("color", "black");
});


//navbar logic
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-86px";
  }
  prevScrollpos = currentScrollPos;
}