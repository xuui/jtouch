//xu.Touch.
window.addEventListener('beforeinstallprompt',function(e){
  // beforeinstallprompt Event fired
  // e.userChoice will return a Promise. 
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult){
    console.log(choiceResult.outcome);
    if(choiceResult.outcome=='dismissed'){
      console.log('User cancelled home screen install');
    }else{
      console.log('User added to home screen');
    }
  });
});
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./service-worker.js').then(function(reg){
    if(reg.installing){
      console.log('Service worker installing');
    } else if(reg.waiting){
      console.log('Service worker installed');
    } else if(reg.active){
      console.log('Service worker active');
    }

  }).catch(function(error){
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
/*
// TODO add service worker code here
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./service-worker.js')
    .then(function(){ console.log('Service Worker Registered'); });
}
*/

//(function(jQuery){
//$=jQuery.noConflict();
// TODO add service worker code here

var jQT=new $.jQT({});
//Launch image.
/*
setTimeout(function(){
  if(!$('#home').hasClass('current'))jQT.goTo('#home','dissolve');
},7000);
*/

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




// beforeinstallprompt //
window.addEventListener('beforeinstallprompt', function(e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise. 
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult) {
    console.log(choiceResult.outcome);
    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    } else {
      console.log('User added to home screen');
    }
  });
});

/*
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  return false;
});
btnSave.addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    // The user has had a postive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt();
    // Follow what the user has done with the prompt.
    deferredPrompt.userChoice.then(function(choiceResult) {
      console.log(choiceResult.outcome);
      if(choiceResult.outcome == 'dismissed') {
        console.log('User cancelled home screen install');
      } else {
        console.log('User added to home screen');
      }
      // We no longer need the prompt.  Clear it up.
      deferredPrompt = null;
    });
  }
});
*/
