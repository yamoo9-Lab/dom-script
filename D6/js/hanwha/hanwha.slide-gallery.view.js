/**
 * -------------------------------------
 * 한화, 슬라이드 갤러리 컴포넌트(위젯), 뷰
 * -------------------------------------
 * HTML 템플릿(구조화), CSS 스타일링
 * -------------------------------------
 */

// IIFE 패턴(캡슐화)
(function(global, hw){

	// 모델 객체에 접근, hw.model (window.hanwha.model)
	var model = hw.model;

	// 모델을 탐색하여 원하는 인덱스의 데이터를 출력
	// 모델을 탐색하려면 반복문... 처리

	/**
	 * --------------------------------
	 * forEach문 예시
	 * 배열의 forEach문은 ECMAScript v5 추가
	 * 크로스 브라우징 하려면....
	 * es5shim.js를 사용하면 됩니다.
	 */

	// 문서의 컨테이너 요소 참조
	var container = document.querySelector('#hanwha-contents');

	// HTML 템플릿 코드(문자열)
	var template = '';

	template += '<ul class="hw-gallery-container">';

	// View 템플릿 코드 작성
	model.forEach(function(item, index){
		template += '<li class="hw-gallery-item">';
		template += 	'<a href="'+ item.href +'">';
		template += 		'<img src="'+ item.image +'" alt>';
		template += 		'<h3 class="hw-gallery-headline">'+ item.headline +'</h3>';
		template += 		'<p class="hw-gallery-summary">'+ item.summary +'</p>';
		template += 	'</a>';
		template += '</li>';
	});

	template += '</ul>';

	// 컨테이너 요소에 template 코드 추가
	container.innerHTML = template;




	/**
	 * --------------------------------
	 * for문 예시
	 */
	// for ( var i=0, l=model.length; i<l; i++ ) {
	// 	var data = model[i];
	// 	console.log(
	// 		data.href,
	// 		'\n' + data.image,
	// 		'\n' + data.headline,
	// 		'\n' + data.summary
	// 	);
	// }

	// 뷰 객체 생성
	hw.view = {

	};

})(window, (window.hanwha = window.hanwha || {}) );
