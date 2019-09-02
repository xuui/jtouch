//xu.Tabs.
var tabPanel,tabTit;

//(function(jQuery){
//$=jQuery.noConflict();
//$(document).ready(function(){
  $('[data-tab=nav] a').click(function(){
    $(this).addClass('current').siblings().removeClass();
    $('[data-tab=content] > [data-tab=panel]').eq($('.tabNav a').index(this)).addClass('current').show().siblings().hide();
    $('[data-tab=content]').scrollTop(0);
  });
//});
//})(jQuery);