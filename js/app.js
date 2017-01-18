// jQuery.noConflict();
(function(ui){$(function(){
ui(document).ready(function(){  
  if(window.navigator.standalone){
    ui('meta[name="apple-mobile-web-app-status-bar-style"]').remove();
    ui('[data-ui=view] header').addClass('status'); 
  }
//function setViewHeight(){
  ui('[data-ui=view]').each(function(){
    if(ui(this).find('> header').length>0){
      var headerH=ui(this).find('> header').outerHeight(true);
    }else{var headerH=0;}
    if(ui(this).find('> footer').length>0){
      var footerH=ui(this).find('> footer').outerHeight(true);
    }else{var footerH=0;}
    var viewHeight=ui(window).height()-(headerH+footerH);
    ui(this).find('> section').height(viewHeight);
  });
//}
});
});})(jQuery);


var jQT=new $.jQT({preloadImages:[]});
// Some sample Javascript functions:
$(function(){
  $(document).ajaxStart(function(){
    $('.ajaxloader').show();
  });
  $(document).ajaxComplete(function(){
    $('.ajaxloader').hide();
  });
jQT.goTo('#home');
  // Show a swipe event on swipe test
  $('#swipeme').swipe(function(evt,data){
    var details=!data ? '':'<strong>'+data.direction+'/'+data.deltaX+':'+data.deltaY+'</strong>!';
    $(this).html('You swiped '+details);
    $(this).parent().after('<li>swiped!</li>')
  });

  $('#tapme').tap(function(){
    $(this).parent().after('<li>tapped!</li>')
  });

  $('a[target="_blank"]').bind('click',function(){
    if(confirm('This link opens in a new window.')){
      return true;
    }else{
      return false;
    }
  });

  // Page animation callback events
  $('#pageevents').bind('pageAnimationStart',function(e,info){
    $(this).find('.info').append('Started animating '+info.direction+'&hellip;  And the link '+'had this custom data: '+$(this).data('referrer').data('custom')+'<br>');
  }).bind('pageAnimationEnd',function(e,info){
    $(this).find('.info').append('Finished animating '+info.direction+'.<br><br>');
  });
  
  $('#MaterialIcon').bind('pageAnimationEnd',function(e,info){
    if(info.direction=='in'){
      if($('#MaterialIcon #icons-cont').html()==''){
        $.getJSON('resources/fonts/mdicons.json',function(data){
          var mdicons=data.icons;
          $('#MaterialIcon #icons-cont').html('');
          for(var i=0;i<mdicons.length;i++){
            $('#MaterialIcon #icons-cont').append('<li class="xu-u-3 '+mdicons[i].group_id+'"><i class="material-icons">'+mdicons[i].ligature+'</i> <span class="caption">'+mdicons[i].ligature+'</span></li>');
          }
        });
      }
    }else{
      //$('#Micon #icons-cont').html('<li class="xu-u-1">Loading...</li>');
    }
  });
  
  // Page animations end with AJAX callback event,example 1(load remote HTML only first time)
  $('#callback').bind('pageAnimationEnd',function(e,info){
    // Make sure the data hasn't already been loaded(we'll set 'loaded' to true a couple lines further down)
    if(!$(this).data('loaded')){
      // Append a placeholder in case the remote HTML takes its sweet time making it back
      // Then,overwrite the "Loading" placeholder text with the remote HTML
      $(this).append($('<div>Loading</div>').load('ajax.html .info',function(){
        // Set the 'loaded' var to true so we know not to reload
        // the HTML next time the #callback div animation ends
        $(this).parent().data('loaded',true);
      }));
    }
  });
  // Orientation callback event
  $('#jqt').bind('turn',function(e,data){
    $('#orient').html('Orientation: '+data.orientation);
  });

});
