/*! app.js © yamoo9.net, 2015 */

// 변수 정의
var html; // undefined
var head;
var body;

// 변수에 값 할당
html = document.documentElement;
head = document.head;
body = document.body;

// 콘솔에 기록
console.log(html, head, body);

// // 2진수
// 0, 1

// // 8진수
// 0, 1, 2, 3, 4, 5, 6, 7

// // 10진수
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// // 16진수
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
// a, b, c, d, e, f
//

/**
 * 요소를 선택한다.
 * 요소에 속성을 정의한다. (설정: SET)
 * 요소에 설정된 속성 값을 가져온다. (가져옴: GET)
 * --------------------------------
 */

// body.style.color = 'red'; // SET
// var getBodyColor = body.style.color; // GET
// console.log(getBodyColor); // 콘솔 화면에 출력(기록)



// 특정 시점(Event)에 따라 동작하게끔 수행하도록 만드는 것.
// 돔스크립트를 사용하는 디자인 패턴
body.onclick = function() {
	// console.log(this);

	// 서체 색상
	// this.style['color'] = '#fc414b';
	// this.style.color = '#fc414b';

	// 서체 크기: font-size
	// this.style['font-size'] = '22px';
	// this.style.fontSize = '22px';

	// 배경 색상: background-color
	// this.style['background-color'] = '#320C10';
	// this.style.backgroundColor = '#320C10';

	// 최적화를 고려한 가장 권장되는 방법
	this.style.cssText = 'color: #fc414b; font-size: 22px; background-color: #320c10;';

};

// HTML 문서가 로드되면... 이벤트 발동
// body 요소의 높이 값을 브라우저 화면 높이 폭 만큼 설정
// height: 100vh;
// html, body { height: 100%; }

window.onload = function() {
	// window.alert('로드 완료 시점!');
	// console.log(window.innerHeight); // 754 + 'px' = '754px'
	body.style.height = window.innerHeight + 'px';
}