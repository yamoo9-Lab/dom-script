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
	// 첫번째 버튼
	buttons[0].onclick = function() {
		// this.innerText란?
		// this는 buttons[0] 요소를 가리키고,
		// this.innerText는 buttons[0]이 포함한 텍스트를 말합니다.
		// body.style.backgroundColor = this.innerText;

		// W3C 표준 방식
		// var bgColor = window.getComputedStyle(this).backgroundColor;
		// MS IE 비표준 방식
		// var bgColor = this.currentStyle.backgroundColor;
		var bgColor = y9.getStyle(this, 'backgroundColor');
		body.style.backgroundColor = bgColor;
	};
	// 두번째 버튼
	buttons[1].onclick = function() {
		// body.style.backgroundColor = this.innerText;

		// W3C 표준 방식
		// var bgColor = window.getComputedStyle(this).backgroundColor;
		var bgColor = y9.getStyle(this, 'backgroundColor');
		body.style.backgroundColor = bgColor;
	};
	// 세번째 버튼
	buttons[2].onclick = function() {
		// body.style.backgroundColor = this.innerText;

		// W3C 표준 방식
		// var bgColor = window.getComputedStyle(this).backgroundColor;
		var bgColor = y9.getStyle(this, 'backgroundColor');
		body.style.backgroundColor = bgColor;
	};

};