

// window.alert()
// alert('call me');

// 아래 코드가 실행되는 시점(Event)을 설정하라.
// 문서가 다 읽어와지고 나서.... load
window.onload = init;

function init() {
	// 문서에서 #controls를 찾아라.
	var controls = document.getElementById('controls');

	// console 패널에 찾은 #controls를 기록(log)해봐라.
	// console.log(controls);

	// controls(변수가 참조하는 문서 객체) 내부에 존재하는 버튼(<a>)을 찾아라.
	var controls_btns = controls.getElementsByTagName('a');
	// ['a', 'a', 'a', 'a']
	// console.log(controls_btns[0]); // #controls 내부에 있는 <a> 요소의 집합

	// contorls_btns에 사용자가 마우스로 클릭하면... 뭔가를 수행해라. (클릭 이벤트 & 핸들링)
	// 클릭하면 콘솔 창에 class 속성, aria-label 속성을 출력하라.

	// 변수0 = 값;
	// 변수1 = 변수0;
	// 변수2 = 변수0;
	// 변수3 = 변수0;

	function btnAction() {
		// this 참조는 function 내부에서 사용될 때, 이벤트에 연결된 문서 객체를 가리킨다.
		// class 속성은 className으로 써야 한다.
		console.log(this.getAttribute('class'));
		console.log(this.getAttribute('id'));
		// console.log(this['aria-label']);
		// aria-label 속성을 출력해본다.
		console.log(this.getAttribute('aria-label'));
		return false;
	};

	// k = 10;
	// a = b = c = d = k;

	// 찾은 각각의 버튼에 click 이벤트를 연결
	controls_btns[0].onclick = btnAction;
	controls_btns[1].onclick = btnAction;
	controls_btns[2].onclick = btnAction;
	controls_btns[3].onclick = btnAction;


};

