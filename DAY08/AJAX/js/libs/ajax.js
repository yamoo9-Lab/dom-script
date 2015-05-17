/*! ajax.js © yamoo9.net, 2015 */
(function(global){
	'use strict';

	// AJAX 통신 객체 생성 헬퍼 함수
	var createXHR = function() {
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

	// AJAX 통신을 위한 처리 헬퍼함수
	global.sendRequest = function(file, callback, method) {

		if (typeof file !== 'string') { throw new Error('통신할 파일은 문장열로 전달해주세요.') }
		if (typeof callback !== 'function') { throw new Error('콜백은 함수여야만 합니다.') }

		var _xhr = createXHR();
		var _method = !method ? 'GET' : 'POST';

		_xhr.open(_method, file);

		_xhr.onreadystatechange = callback;

		_xhr.send();

	};

})(window);