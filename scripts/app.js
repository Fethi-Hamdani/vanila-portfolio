
     const t2 = document.getElementById('t2');
     const t1 = document.getElementById('t1');
     const t3 = document.getElementById('t3');
    
   
     
function onStart(){
  $(window).resize(function() {
    $('#bc').css("height" , $('#bc').width());
   var width = ''+$('.skl').width()/16;
    $('.skl').css("height" , width);
  });
    $('#bc').css("height" , $('#bc').width());
    var width;
    if($(window).width()>750){
     width = ''+$('.panel').width()/2.5;
    $('.panel').css("height" , width);}
    width = ''+$('.skl').width()/16;
    $('.skl').css("height" , width);

    
    t1.style.transform = "translateX(600px)";
    t3.style.transform = "translateX(600px)";
    setTimeout(function() {
        t2.style.transform = "translateX(1000px)";
      }, 400);
      $(".mail").click(function(){
        console.log("ffvbdvfjkv");
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=fethinvrfail@gmail.com&su=SUBJECT&body=BODY', '_blank');
      });
}


function home(){
  
    $('html,body').animate({
        scrollTop: $(".home").offset().top},
        'fast');
   // var x = document.getElementById("img");
   // x.style.transform ="scale(0.2)";
}
function about(){
  $('html,body').animate({
      scrollTop: $(".about").offset().top},
      'fast');
 // var x = document.getElementById("img");
 // x.style.transform ="scale(0.2)";
}
function projects(){
  $('html,body').animate({
      scrollTop: $("#prjcts").offset().top},
      'fast');
 // var x = document.getElementById("img");
 // x.style.transform ="scale(0.2)";
}
function contact(){
  $('html,body').animate({
      scrollTop: $(".contact").offset().top},
      'fast');
 // var x = document.getElementById("img");
 // x.style.transform ="scale(0.2)";
}
