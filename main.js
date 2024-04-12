$(document).ready(function() {
  
    $(window).scroll(function() {
      
      if ($(window).scrollTop() > 1000) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      };
    });
});

let inner = document.getElementById("inner-div");
let established = document.getElementById("established");

function myFunction() {
    var x = document.getElementById("dropdown");
    var icon = document.getElementById("hamb");
    if (x.style.display === "flex") {
      x.style.display = "none";
      icon.style.fontSize='50px';
      icon.innerHTML = '&#9776';
    } else {
      x.style.display = "flex";
      icon.style.fontSize='40px';x
      icon.style.paddingTop='20px'
      icon.innerHTML ='&#x2715';
    }
    
}


