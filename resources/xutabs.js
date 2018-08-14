//xu.Tabs.
var tabPanel,tabTit;

(function(jQuery){
$=jQuery.noConflict();
$(document).ready(function(){
  $('.tabNav a').click(function(){
    $(this).addClass('current').siblings().removeClass();
    $('.tabContent > [data-tab=panel]').eq($('.tabNav a').index(this)).addClass('current').show().siblings().hide();
  });
});
})(jQuery);