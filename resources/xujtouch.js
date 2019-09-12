//xu.Touch.
//(function(jQuery){
//$=jQuery.noConflict();

var jQT=new $.jQT({});
//Launch image.
setTimeout(function(){
  if(!$('#home').hasClass('current'))jQT.goTo('#home','dissolve');
},7000);

// Some sample Javascript functions:
//$(function(){});
//if(window.navigator.standalone){}

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

$('#MaterialIcon').bind('pageAnimationEnd',function(e,info){
  if(info.direction=='in'){
    if($('#MaterialIcon #icons-cont').html()==''){
      $('#MaterialIcon #icons-cont').html('<li class="xu-u">Loadind Material Icon...</li>');
      $.getJSON('resources/fonts/mdicons.json',function(data){
        var mdicons=data.icons,icons_group='';
        $('#MaterialIcon #icons-cont').html('');
        for(var i=0;i<mdicons.length;i++){
          if(icons_group!=mdicons[i].group_id){
            icons_group=mdicons[i].group_id;
            $('#MaterialIcon #icons-cont').append('<li class="xu-u">'+mdicons[i].group_id+'</li>');
          }
          $('#MaterialIcon #icons-cont').append('<li class="xu-u-3 '+mdicons[i].group_id+'"><a href="javascript:;"><i class="material-icons">'+mdicons[i].ligature+'</i> <span class="caption">&amp;#x'+mdicons[i].codepoint+'</span></a></li>');// &#x'+mdicons[i].codepoint+';
        }
        $('#MaterialIcon #icons-cont').append('<li class="clearer"></li>');
      });
    }
  }else{}
});

//})(jQuery);