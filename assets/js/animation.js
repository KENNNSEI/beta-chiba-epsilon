$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
  setTimeout(function(){
		$('.start div').fadeIn(100);
	},800); //1秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start div').animate({'marginLeft': '115%'}, 1600, 'easeOutCubic');
	},800); //1秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});