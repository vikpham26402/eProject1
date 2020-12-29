$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
  });
$(window).on('scroll',function(){
  if ($(window).scrollTop()){
    $('.navbar-transparent').addClass('color');
  }
  else {
    $('.navbar-transparent').removeClass('color');
  }
  });
function filterItems() {
  let i,Shoes,Pants,Shirt;
  Shoes=document.getElementsByClassName("Shoes")
  Pants=document.getElementsByClassName("Pants")
  Shirt=document.getElementsByClassName("Shirt")
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}