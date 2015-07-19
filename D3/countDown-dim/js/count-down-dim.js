// 문서 로딩이 되면 실행
init();

function init() {
	// 1. 문서 로딩이 되면 딤을 생성한다.
	var dim_layer = createDim('dim');

	// 2. 카운트다운 요소를 화면 가운데 추가한다.
	var body      = selector('body');
	var countDown = createEl('div');
	var _count    = 5;
	var count     = createText( _count );

	countDown.setAttribute('id', 'countdown');

	append(countDown, count);

	append(body, countDown);

	/**
	 * 딤이 만들어지고, 카운트가 초기화된 상태
	 * 초기 과정이 끝난 후에 실행
	 * --------------------------------
	 */

	var intervalID = setInterval(function() {

		if ( _count === 1 ) {
			remove(dim_layer);
			remove(countDown);
			clearInterval(intervalID);
		}

		remove(countDown.firstChild);
		append(countDown, createText( --_count ) );

	}, 1000);
}


/**
 * --------------------------------
 * 번외편... innerHTML
 * --------------------------------
 */
// var countdown_html__code = '<div id="countdown">5</div>';
// body.innerHTML += countdown_html__code;