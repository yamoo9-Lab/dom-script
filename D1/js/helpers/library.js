function getStyle(el, prop) {

	// 스크립트의 조건문
	// 조건이 참이면 실행
	// 조건이 거짓이면 실행 X

	// if ( 조건 ) {
	// 	조건이 참이면 실행되는 코드
	// } else {
	// 	조건이 거짓이면 실행되는 코드
	// }

	if ( window.getComputedStyle ) {
		return window.getComputedStyle(el)[prop];
	} else {
		return el.currentStyle[prop];
	}

};