//xu.Tabs.
();
var tabPanel,tabTit;

(function(jQuery){
$=jQuery.noConflict();
$(document).ready(function(){
  $('.tabTit a').click(function(){
    $(this).addClass('current').siblings().removeClass();
    $('.tabPanel > ul').eq($('.tabTit a').index(this)).addClass('current').show().siblings().hide();
  });
});
})(jQuery);