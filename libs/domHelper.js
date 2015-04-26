// 맛보기!! 크로스 브라우징 헬퍼 함수를 만들어보자!!!
function getStyle(el, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(el)[prop];
	} else {
		return el.currentStyle[prop];
	}
}