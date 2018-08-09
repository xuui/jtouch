//xu.Tabs.
var tabPanel,tabTit;

(function(jQuery){
$=jQuery.noConflict();
$(document).ready(function(){
  $('.tabNav a').click(function(){
    $(this).addClass('current').siblings().removeClass();
    $('.tabContent > .tabPanel').eq($('.tabNav a').index(this)).addClass('current').show().siblings().hide();
  });
});
})(jQuery);