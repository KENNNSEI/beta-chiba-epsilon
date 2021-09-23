$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン
  setTimeout(function(){
		$('.start div').fadeIn(100);
	},800); //0.8秒後にロゴをフェードイン
	setTimeout(function(){
		$('.start div').animate({'marginLeft': '115%'}, 1600, 'easeOutCubic');
	},800); //0.8秒後にロゴをease
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3000); //3秒後にロゴ含め背景をフェードアウト
});