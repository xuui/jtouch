$(function(){
'use strict';
var jQT=new $.jQT({preloadImages:[]});
if(window.navigator.standalone){
  //alert('0');
  $('header').addClass('status');
}
  
$('#splash').bind('pageAnimationEnd',function(e,info){
  if(info.direction=='in'){
    $('#splash_slider').flexslider({
      animation:'slide',
      animationLoop:false,
      directionNav:false,
      slideshow:false,
      end:function(slider){
        console.log('Splash slider End.');
      }
    });
  }else{
    $('#splash_slider').flexslider(0);
  }
});

$('#animdemo').bind('pageAnimationStart',function(e,info){
  $(this).find('h2.vtitle').html($(this).data('referrer').data('title'));
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
