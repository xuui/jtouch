$(function(){
'use strict';
var jQT=new $.jQT({preloadImages:[]});
if(window.navigator.standalone){
  //alert('0');
  $('header').addClass('status');
}
$('#splash_slider').flexslider({
  animation:'slide',
  animationLoop:false,
  directionNav:false,
  slideshow:false
  ,end:function(){
    console.log('Splash slider End.');
  }
});

/*if(window.navigator.standalone){
  $('header').addClass('status');
}*/
/*

  
console.log('xuui touch init.');
/*$(document).ajaxStart(function(){
  $('.ajaxloader').show();
});*/
/*$(document).ajaxComplete(function(){
  $('.ajaxloader').hide();
});*/
//jQT.goTo('#home');

});
