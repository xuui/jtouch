$(function(){
'use strict';
//var jQT=new $.jQT({preloadImages:[]});

$('#splash_slider').flexslider({
  animation:"slide",
  animationLoop:false,
  directionNav:false,
  slideshow:false
  ,end:function(){
    console.log('Splash slider End.');
  }
});
  
console.log('xuui touch init.');
/*$(document).ajaxStart(function(){
  $('.ajaxloader').show();
});*/
/*$(document).ajaxComplete(function(){
  $('.ajaxloader').hide();
});*/
//jQT.goTo('#home');

});
