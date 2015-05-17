/*! ajax-data.js © yamoo9.net, 2015 */

;(function(global){
	'use strict';

	// TEXT
	ajax('/AJAX/data/data.txt', function() {
		// console.log(this.responseText);
	});

	// XML
	ajax('/AJAX/data/book.xml', function() {
		var XMLDoc = this.responseXML;
		var books  = XMLDoc.querySelector('books');
		var book   = books.querySelectorAll('book');
		for(var i = 0, l=book.length; i<l; i++) {
			var item = book[i];
			var author = item.querySelector('author');
			var pages = item.querySelector('pages');
		}
	});

	// JSON
	ajax('/AJAX/data/book.json', function() {
		var data = JSON.parse(this.responseText);
		for (var i=0, l=data.length; i<l; i++) {
			var item = data[i];
			console.log(item.author, item.pages);
		}
	});



//* -----------------------------------------------------------------

	// // AJAX를 처리해주는 객체를 활용
	// // XMLHttpRequest 객체 생성 -> 인스턴스
	// var xhr = new XMLHttpRequest;
	// var callDataZone = document.querySelector('#called-data-zone');
	// var callAjaxBtn = document.querySelector('#call-ajax-data');

	// // xhr 인스턴스(조각) : AJAX 통신 객체
	// // .open(방법, 파일, 비동기)
	// xhr.open('GET', '/AJAX/data/data.txt');

	// // 통신합니다.
	// callAjaxBtn.onclick = function() {
	// 	xhr.send();
	// 	return false;
	// };

	// // 통신한 결과 (이벤트 발생, 감지, 처리)
	// xhr.onreadystatechange = function() {
	// 	if(this.status === 200 && this.readyState === 4) {
	// 		var data = this.responseText;
	// 		callDataZone.innerHTML = data;
	// 	}
	// };

	// // xhr.addEventListener('readystatechange', function() {
	// 	// 진보된 이벤트 모델
	// // });

})(window);