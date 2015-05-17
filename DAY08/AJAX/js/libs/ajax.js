/*! ajax.js © yamoo9.net, 2015 */
(function(global){
	'use strict';

	// AJAX 통신 객체 생성 헬퍼 함수
	global.createXHR = function() {
		// return new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
		var _xhr;
		if(!global.XMLHttpRequest) {
			// IE 6
			_xhr = new ActiveXObject('Microsoft.XMLHTTP');
		} else {
			// IE 7+
			_xhr = new XMLHttpRequest;
		}
		return _xhr;
	};

})(window);