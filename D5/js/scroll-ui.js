/*! scroll-ui.js © yamoo9.net, 2015 */
(function(global, _){

	// 전역과 구분되는 나만의 코드 공간
	// 다른 이들과 코드가 충돌나지 않죠.

	global.onscroll = function() {
		// 스크롤된 현재 y 포지션
		console.log(this.scrollY);
	};

})(window, window.y9);