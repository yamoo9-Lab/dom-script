/*! stickyScroll.js © yamoo9.net, 2015.5.3 */

// 사용자가 이 함수를 사용할 때, 어떤 전달인자는 받게 할 것인가?
// 스티키 스크롤을 적용할 요소
function stickyScroll(el, fixedClass, snap) {

	// 유효성 검사
	if ( el === undefined || el.nodeType !== 1 ) {
		throw new Error('전달인자가 잘못되었습니다. 요소를 전달해주세요.');
	}

	// snap 초기 값 설정
	snap = (snap===false && snap!==undefined) ? false : true;

	/**
	 * 제어할 대상 참조
	 */
	var stickyEl     = el,
		stickyTopPos   = snap ? (stickyEl.offsetTop - stickyEl.clientHeight) : stickyEl.offsetTop;

	/**
	 * 이벤트 제어
	 */
	window.onresize = resetStickyScroll;
	window.onscroll = assignStickyScroll;


	/**
	 * resetStickyScroll
	 * @return null
	 */
	function resetStickyScroll() {
		stickyEl.classList.remove(fixedClass);
		stickyTopPos = snap ? (stickyEl.offsetTop - stickyEl.clientHeight) : stickyEl.offsetTop;
	};

	/**
	 * assignStickyScroll
	 * @return null
	 */
	function assignStickyScroll() {
		if ( window.scrollY > stickyTopPos ) {
			stickyEl.classList.add(fixedClass);
		} else {
			stickyEl.classList.remove(fixedClass);
		}
	};

}