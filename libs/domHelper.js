/*! domHelper.js © yamoo9.net, 2015.5.7 */

/**
 * DOM 요소에 스타일을 설정하거나, 가져오는 함수
 * @param  {ElementNode} el    요소노드
 * @param  {String} prop  속성(문자열)
 * @param  {String} value 값(문자열)
 * @return {String}       값
 */
function css(el, prop, value) {
	if (value) {
		_setStyle(el, prop, value);
	} else {
		return _getStyle(el, prop);
	}
}

/**
 * DOM 요소의 스타일 설정 값을 가져오는 함수
 * @param  {ElementNode} el   요소노드
 * @param  {String} prop 속성(문자열)
 * @return {String}       값
 */
function _getStyle(el, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(el)[prop];
	} else {
		return el.currentStyle[prop];
	}
}

/**
 * DOM 요소의 스타일을 설정하는 함수
 * @param  {ElementNode} el   요소노드
 * @param  {String} prop 속성(문자열)
 * @param  {String} value 값(문자열)
 */
function _setStyle(el, prop, value) {
	el.style[prop] = value;
}

/**
 * DOM 요소에 속성을 추가하는 함수
 * @param {ElementNode} el    요소노드
 * @param  {String} prop 속성(문자열)
 * @param  {String} value 값(문자열)
 */
function attr(el, prop, value) {
	if ( el.nodeType === 1 ) {
		el.setAttribute(prop, value);
	}
}

/**
 * DOM 요소에 class 속성이 있는지 확인하는 함수
 * @param  {ElementNode}  el        요소노드
 * @param  {String}       className class 속성 이름
 * @return {Boolean}                class 속성 값의 유무 반환
 */
function hasClass(el, className) {
	if (el.nodeName) {
		var classList = el.className.split(' '),
			l         = classList.length;
		while(--l > -1) {
			if (classList[l] === className) {
				return true;
			}
		}
		return false;
	}
}

/**
 * DOM 요소에 class 속성을 추가하는 함수
 * @param  {ElementNode}  el        요소노드
 * @param  {String}       className class 속성 이름
 */
function addClass(el, className) {
	if ( el.nodeName && !hasClass(el, className) ) {
		el.className += ' ' + className;
	}
}

/**
 * DOM 요소의 class 속성을 제거하는 함수
 * @param  {ElementNode}  el        요소노드
 * @param  {String}       className class 속성 이름
 */
function removeClass(el, className) {
	if (el.nodeName && hasClass(el, className) ) {
		el.className = el.className.replace(className, '').trim();
	}
}

/**
 * DOM 요소의 클래스 설정 여부를 확인하여 클래스를 제거하거나, 추가하는 함수
 * @param  {ElementNode} el        요소노드
 * @param  {String} className 클래스 속성 값(문자열)
 * @return {undefined}
 */
function toggleClass(el, className) {
	if( hasClass(el, className) ) {
		removeClass(el, className);
	} else {
		addClass(el, className);
	}
}

function radioClass(el, className) {
	// 유효성 검사
	if ( !el || !el.nodeName ) { throw new Error('첫번째 전달인자는 요소노드를 설정하여야 합니다.'); }
	if ( !className || typeof className !== 'string' ) { throw new Error('두번째 전달인자는 문자열로 설정하여야 합니다.'); }

	var _siblings = el.parentNode.children;
	var _len = _siblings.length;
	var _item;

	while( _len-- ) {
		_item = _siblings[_len];
		if ( hasClass(_item, className) ) {
			removeClass(_item, className);
		}
	}

	addClass(el, className);

}