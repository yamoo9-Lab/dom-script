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

	function makeTemplate(options) {
		// 문서의 컨테이너 요소 참조
		var container = document.querySelector(options.container);

		// HTML 템플릿 코드(문자열)
		options.template = '';

		options.template += options.start_code;

		// View 템플릿 코드 작성
		options.model.forEach(options.loop.bind(options));

		options.template += options.end_code;

		// 컨테이너 요소에 options.template 코드 추가
		container.innerHTML = options.template;
	}

	makeTemplate({
		'model'      : model,
		'container'  : '#hanwha-contents',
		'start_code' : '<ul class="hw-gallery-container">',
		'loop'       : function(item, index){
			this.template += '<li class="hw-gallery-item">';
			this.template += 	'<a href="'+ item.href +'">';
			this.template += 		'<img src="'+ item.image +'" alt>';
			this.template += 		'<h3 class="headline">'+ item.headline +'</h3>';
			this.template += 		'<p class="summary">'+ item.summary +'</p>';
			this.template += 	'</a>';
			this.template += '</li>';
		},
		'end_code'   : '</ul>'
	});


	/**
	 * --------------------------------
	 * forEach문 예시
	 * 배열의 forEach문은 ECMAScript v5 추가
	 * 크로스 브라우징 하려면....
	 * es5shim.js를 사용하면 됩니다.
	 */

	// // 문서의 컨테이너 요소 참조
	// var container = document.querySelector('#hanwha-contents');

	// // HTML 템플릿 코드(문자열)
	// var template = '';

	// template += '<ul class="hw-gallery-container">';

	// // View 템플릿 코드 작성
	// model.forEach(function(item, index){
	// 	template += '<li class="hw-gallery-item">';
	// 	template += 	'<a href="'+ item.href +'">';
	// 	template += 		'<img src="'+ item.image +'" alt>';
	// 	template += 		'<h3 class="hw-gallery-headline">'+ item.headline +'</h3>';
	// 	template += 		'<p class="hw-gallery-summary">'+ item.summary +'</p>';
	// 	template += 	'</a>';
	// 	template += '</li>';
	// });

	// template += '</ul>';

	// // 컨테이너 요소에 template 코드 추가
	// container.innerHTML = template;




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

	var wrapper = document.querySelector('#hanwha-contents'),
		container = wrapper.querySelector('.hw-gallery-container'),
		container_item = container.querySelector('.hw-gallery-item');

	wrapper.classList.add('wrapper');
	wrapper.classList.add('hw-gallery');

	var container_width = container_item.clientWidth * model.length + 'px';

	container.style.width = container_width;


	// 뷰 객체 생성
	hw.view = {
		'makeTemplate': makeTemplate
	};

})(window, (window.hanwha = window.hanwha || {}) );
