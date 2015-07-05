window.onload = function() {

	// 변수 정의 패턴
	// --------------------------------------------------------

	// 변수만 정의
	// var body, buttons;

	// 선언된 변수에 값 할당
	// body = document.body;
	// buttons = document.getElementsByTagName('button');

	// 변수 선언과 동시에 값 할당
	// var body = document.body;
	// var buttons = document.getElementsByTagName('button');

	// var 싱글턴 패턴
	var body    = document.body,
		buttons = document.getElementsByTagName('button');


	// 수집된 버튼에 이벤트 핸들링
	// --------------------------------------------------------
	// 버튼은 어떻게 가져오죠? buttons = document.getElementsByTagName('button');
	// 버튼의 개수는 어떻게 가져오죠? buttons.length
	// 몇 번 반복해야 할까요? 4번 (화면에 버튼이 4개니까)


	/**
	 * --------------------------------
	 * while, do ~ while 반복문
	 * while (조건) {
	 * 	조건이 참이면 코드 실행
	 * }

 	 * do {
 	 * 	조건 유무와 상관없이 반드시 1회는 실행.
 	 * 	조건이 참이면, 조건이 참인 동안 반복 실행.
	 * } while (조건);
	 * --------------------------------
	 */


	// var buttons_len = buttons.length; // 4
	// var k = 0;

	// while( k < buttons_len ) {
	// 	buttons[k++].onclick = function() {
	// 		var background = getStyle(this, 'background');
	// 		body.style.background = background;
	// 		body.style.backgroundSize = 'cover';
	// 	};
	// 	// k = k + 1;
	// 	// k += 1;
	// 	// k++;
	// 	// ++k;
	// }

	/**
	 * ---------------------------------------------
	 * for 반복문
	 * for (변수 선언 및 값 할당; 조건 확인; 변위 값 변화) {
	 * 	반복 처리 구문
	 * }
	 * ---------------------------------------------
	 */

	for(var buttons_len = buttons.length, k = 0; k < buttons_len; k++ ) {
		buttons[k].onclick = function() {
			var background = getStyle(this, 'background');
			body.style.background = background;
			body.style.backgroundSize = 'cover';
		};
	}

	buttons[0].onclick();

};