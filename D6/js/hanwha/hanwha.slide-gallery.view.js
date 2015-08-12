/**
 * -------------------------------------
 * 한화, 슬라이드 갤러리 컴포넌트(위젯), 뷰
 * -------------------------------------
 * HTML 템플릿(구조화), CSS 스타일링
 * -------------------------------------
 */

// IIFE 패턴(캡슐화)
(function(global, hw){

	/**
	 * --------------------------------
	 * 모델
	 * 모델 객체에 접근, hw.model (window.hanwha.model)
	 */
	var model = hw.model;

	/**
	 * --------------------------------
	 * 뷰 함수
	 */

	/**
	 * 템플릿 제작 함수
	 * @param  {Object} options 사용자 정의 설정 객체
	 */
	function makeTemplate(options) {
		// 문서의 컨테이너 요소 참조
		var container = document.querySelector(options.container);

		// HTML 템플릿 코드(문자열)
		options.template = '';

		options.template += options.start_code;

		// View 템플릿 코드 작성
		options.model.forEach(options.loop.bind(options));

		options.template += options.end_code;

		if (container) {
			// 컨테이너 요소에 options.template 코드 추가
			container.innerHTML = options.template;
		} else {
			return options.template;
		}
	}

	/**
	 * --------------------------------
	 * 뷰 초기 설정(Initialization)
	 */

	// makeTemplate() 함수를 사용하여 동적으로 HTML 콘텐츠 추가
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

	// View 문서 요소 객체 참조
	var wrapper        = document.querySelector('#hanwha-contents'),
		container      = wrapper.querySelector('.hw-gallery-container'),
		container_item = container.querySelector('.hw-gallery-item');

	// wrapper 요소에 클래스 설정
	wrapper.classList.add('wrapper');
	wrapper.classList.add('hw-gallery');

	// container 요소에 width 설정
	var container_item_width = container_item.clientWidth,
		container_width = container_item_width * model.length;
	container.style.width = container_width + 'px';

	container.classList.add('anim');

	// 페이지네이션 동적 템플릿 추가 설정

	var pagenation_count = [];

	for (var i=0, l=Math.ceil(model.length/3); i<l; i++) {
		pagenation_count.push('');
	};

	var pagenation_code = makeTemplate({
		'model': pagenation_count,
		'start_code': '<div class="hw-gallery-pagenation">',
		'loop': function(item, index) {
			this.template += '<a href role="button" aria-label="'+ (index+1) +'번째 슬라이드"></a>'
		},
		'end_code': '</div>'
	});

	wrapper.innerHTML = pagenation_code + wrapper.innerHTML;

	var pagenation = wrapper.querySelector('.hw-gallery-pagenation');

	/**
	 * --------------------------------
	 * 뷰 객체 생성
	 */
	hw.view = {
		'makeTemplate'    : makeTemplate,
		'wrapper'         : wrapper,
		'container'       : container,
		'container_item'  : container_item,
		'container_item_width'  : container_item_width,
		'pagenation'      : pagenation,
	};

})(window, (window.hanwha = window.hanwha || {}) );
