$(function() {
	setTimeout(function(){
		$('.start-m p').fadeIn(1000);
	},500); //0.5秒後にロゴをフェードイン
  // setTimeout(function(){
	// 	$('.start-m div').fadeIn(100);
	// },1800); //1.4秒後にロゴをフェードイン
	// setTimeout(function(){
	// 	$('.start-m div').animate({'marginLeft': '100%'}, 1600, 'easeOutCubic');
	// },1800); //1.4秒後にロゴをease
	setTimeout(function(){
		$('.start-m').fadeOut(500);
	},2500); //3秒後にロゴ含め背景をフェードアウト
});

$(function() {
  var $aniS = $("#ani")
  $(document).on('click', '.btn-animation1', function(){
    $aniS.addClass('aniS');
    setTimeout(function(){
      $('.aniS').fadeIn(0);
    },0); //0.1秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.aniHide').fadeIn(300);
    },500); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.aniHide').animate({'marginLeft': '70%'}, 1500, 'easeOutBounce');
    },820); //1秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.aniHide').animate({'marginTop': '100%'}, 1500, 'easeOutCubic');
    },2400); //1秒後にロゴをフェードイン!
    setTimeout(function() {
      $('.aniS').fadeOut(300);
    }, 3500);//3秒後にロゴ含め真っ白背景をフェードアウト！
  });
});

$(function() {
  var $aniS = $("#ani-1")
  $(document).on('click', '.btn-animation2', function(){
    $aniS.addClass('aniS');
    setTimeout(function(){
      $('.aniS').fadeIn(0);
      $('.rail').fadeIn(0);
    },0); //0.1秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.aniHide-1').fadeIn(300);
    },500); //0.5秒後にロゴをフェードイン!
    setTimeout(function(){
      $('.aniHide-1').animate({'marginLeft': '110%'}, 2000, 'easeOutCubic');
    },820); //1秒後にロゴをフェードイン!
    setTimeout(function() {
      $('.aniS').fadeOut(300);
    }, 3000);//3秒後にロゴ含め真っ白背景をフェードアウト！
  });
});
$(function() {
  var $aniS = $("#ani-2")
  $(document).on('click', '.btn-animation3', function(){
    $aniS.addClass('aniS');
    setTimeout(function(){
      $('.aniS').fadeIn(0);
    },0); //0.1秒後にロゴをフェードイン!
    setTimeout(function(){
      $('#ani-2 p').fadeIn(300);
    },500); //0.5秒後にロゴをフェードイン!
    setTimeout(function() {
      $('.aniS').fadeOut(300);
    }, 2000);//3秒後にロゴ含め真っ白背景をフェードアウト！
  });
});