/*! scroll-ui.js © yamoo9.net, 2015 */
(function(global, _){

	// 전역과 구분되는 나만의 코드 공간
	// 다른 이들과 코드가 충돌나지 않죠.

	var body = document.body;
	var displayScrollY = _.$('.display-scroll-y');
	var scrolled_progress = _.$('.scrolled-progress-bar');

	global.onload = global.onscroll = function() {
		// 스크롤된 현재 y 포지션
		// console.log(this.scrollY);

		// _.text( displayScrollY, getScrollY() );
		_.text( displayScrollY, getScrolledPercent() );

		_.css( scrolled_progress, 'width', getScrolledPercent() );

	};

	function getScrolledPercent() {
		// 스크롤 가능한 세로 축 길이 = 문서의 전체 세로 축 길이 - 화면 세로 축 길이
		var available_height = body.offsetHeight - global.innerHeight;
		// 스크롤한 퍼센트 = 현재 스크롤 위치 / available_height * 100
		var percent = Math.round( global.scrollY / available_height * 100 ) + '%';

		return percent;
	}

	function getScrollY() {
		return global.scrollY;
	}

	// var buttons = _.$('[type=button]');

	// _.each(buttons, function(index, item) {
	// 	item.onclick = btnClk;
	// });

	// function btnClk() {
	// 	var y_pos = _.attr(this, 'id').split('-')[1];

	// 	global.scrollTo(0, y_pos);

	// }

})(window, window.y9);