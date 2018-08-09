// Xu.Tab Panel.

(function($){  
$.fn.xu_tabs=function(options){
  var defualts={id:null,class:0};
  var opts=$.extend({},defualts,options);
  var xu_tabs=$(this);
  
  xu_tabs.siblings(opts.tabTatle).click(function(){
	$(this).addClass('selected').siblings().removeClass();
	//xu_tabs.siblings(opts.tabPanel).eq(xu_tabs.siblings(opts.tabPanel).index(this)).show().siblings().hide();
	opts.tabPanel.eq(xu_tabs.siblings(opts.tabPanel).index(this)).show().siblings().hide();
  });
  
  /*
  $('#xinwen .tabTitle a').click(function(){
	$(this).addClass('selected').siblings().removeClass();
	$('#xinwen .tabContent >div').eq($('#xinwen .tabTitle a').index(this)).show().siblings().hide();
  });
  */
  
};
})(jQuery); 
///////////////////////////////////////////////////////////////////////////////
(function(){(function(jQuery){
jQuery(document).ready(function(){
  jQuery('#gotop').xu_tabs({tabTatle:jQuery('id'),tabPanel:jQuery('id2')});
});
})(jQuery);})();