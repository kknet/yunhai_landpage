(function($) {
	'use strict';
	$('.chapter-morebtn').on("click", function(){
		$('.chapter-masking').hide();
		$('.chapter-content').css({'overflow': 'visible', 'height': 'auto'});
		$(this).hide();
		$('.chapter-morebtn:last-child').css('display','block').show();
	})

  // 点击跳转
  // $(".jump").on("click", function(){
  	// window.location.replace("http://jd.da-wang.cn/tk/b300fbb6c750135d3150e240d009bd2a");
    // window.location.href="http://jd.da-wang.cn/tk/b300fbb6c750135d3150e240d009bd2a";
    // $(".mask").show();
  // })

  function getUrlKey(name){
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
  }

  var vid = getUrlKey('vid');
  var channel = getUrlKey('channel');
  var u = navigator.userAgent, app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  var isWeixin = u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';//微信浏览器

  $(".jump").click(function(){
    if(isAndroid){
      //微信浏览器
      if(isWeixin){
        $(".mask").show();
        return;
      }
      //安卓
      if(channel == '' || channel == 'undefined' || channel == null){
        window.location.href = 'http://ssy-file-common.b0.upaiyun.com/Wltt_News_sem04.apk';
      }else{
        window.location.href = 'http://ssy-file-common.b0.upaiyun.com/Wltt_News_sem04.apk';
      }

    }
    if(isiOS){
      //苹果
      window.location.href = 'http://ssy-file-common.b0.upaiyun.com/Wltt_News_sem04.apk';
    }
  })

  // 10s 内无操作则跳转
  // var timer = '';
  // timer = setTimeout(function(){
  // 	// window.location.replace("http://jd.da-wang.cn/tk/b300fbb6c750135d3150e240d009bd2a");
  //   window.location.href="http://jd.da-wang.cn/tk/b300fbb6c750135d3150e240d009bd2a";
  // }, 10000)
  // function touchend(){
  // 	timer = setTimeout(function(){
  // 		// window.location.replace("http://jd.da-wang.cn/tk/b300fbb6c750135d3150e240d009bd2a");
  // 		window.location.href="http://jd.da-wang.cn/tk/b300fbb6c750135d3150e240d009bd2a";
  // 	}, 10000)	
  // }
  // function touchstart(){
  // 	// console.log("start");
  // 	// console.log(timer == '');
  // 	if(timer == ''){
  // 		// console.log("timer 为空");
  // 	}else {
  // 		clearTimeout(timer)
  // 		timer = '';
  // 		// console.log("清除定时器");
  // 	}
  // }
  // document.addEventListener('touchstart',touchstart,false); 
  // document.addEventListener('touchend',touchend,false); 

  $("#g1 .change").on("click", function(){
  	$("#g1 .like1").toggle();
  	$("#g1 .like2").toggle();
  })

  $("#g2 .change").on("click", function(){
  	$("#g2 .like1").toggle();
  	$("#g2 .like2").toggle();
  })

  $('.close').click(function(){
    $('header').hide();
    $('article').css("margin", "0")
  })
})(jQuery);
