//sidebar

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

 // hover enlarge text
 $(function(){
  $("p#hover-enlarge").hover(function(){
    $("p#hover-enlarge").animate({opacity:"0.8"},"slow");
    $("p#hover-enlarge").animate({fontSize:"2em"},"slow");
  });
  });
