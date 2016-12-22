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

$('#MaterialIcon').bind('pageAnimationEnd',function(e,info){
  if(info.direction=='in'){
    if($('#MaterialIcon #icons-cont').html()==''){
      $('#MaterialIcon #icons-cont').html('<li class="xu-u">Loadind Material Icon...</li>');
      $.getJSON('resources/fonts/mdicons.json',function(data){
        var mdicons=data.icons;
        $('#MaterialIcon #icons-cont').html('');
        for(var i=0;i<mdicons.length;i++){
          $('#MaterialIcon #icons-cont').append('<li class="xu-u-3 '+mdicons[i].group_id+'"><i class="material-icons">'+mdicons[i].ligature+'</i> <span class="caption">'+mdicons[i].ligature+'</span></li>');
        }
      });
    }
  }else{}
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
