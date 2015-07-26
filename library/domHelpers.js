/**
 * --------------------------------
 * DOM 탐색(Traversing) 헬퍼 함수
 * --------------------------------
 */

/**
 * DOM 요소 선택 함수
 * $('#app a')
 * --------------------------------
 */
function $(ex) {
	if (typeof ex !== 'string') {
		console.error('CSS 선택자 표기식을 문자열을 인자로 전달해야 합니다.')
	}
	var list     = document.querySelectorAll(ex),
		list_len = list.length;
	switch(list_len) {
		case 0: return null;
		break;
		case 1: return list[0];
		break;
		default: return list;
	}
}

/**
 * find() 헬퍼함수
 * find( $('body'), 'a' )
 * --------------------------------
 */
function find(parentEl, childSelector) {
	if ( !parentEl.nodeName || typeof childSelector !== 'string' ) {
		console.error('첫번째 인자는 돔 객체를, 두번째 인자는 문자열을 넣어야 합니다.');
	}
	var children     = parentEl.querySelectorAll(childSelector),
		children_len = children.length;
	switch(children_len) {
		case 0: return null;
		break;
		case 1: return children[0];
		break;
		default: return children;
	}
}

/**
 * --------------------------------
 * DOM 생성(Creating) 헬퍼 함수
 * --------------------------------
 */

/**
 * DOM 요소/텍스트 노드 추가 헬퍼함수
 * createEl('div')
 * createText('this is division')
 * --------------------------------
 */
function createEl(name) {
	return document.createElement(name);
}

function createText(content) {
	return document.createTextNode(content);
}

/**
 * --------------------------------
 * DOM 조작(Manipulation) 헬퍼 함수
 * --------------------------------
 */

/**
 * append()
 * 부모 요소 내부에 자식 요소를 마지막 자식 요소로 추가하는 함수
 * append( $('body'), $('#app') )
 * --------------------------------
 */
function append(parentEl, childEl) {
	parentEl.appendChild(childEl);
}

/**
 * remove()
 * 부모 요소 내부에서 자신(요소 노드)을 제거하는 함수
 * remove( $('#demo') )
 * --------------------------------
 */
function remove(childEl) {
	childEl.parentNode.removeChild(childEl);
}

/**
 * attr()
 * 속성을 가져오거나, 설정하는 헬퍼함수
 * attr($('body'), 'class');                 // GET
 * attr($('body'), 'class', 'this-is-body'); // SET
 * --------------------------------
 */
function attr(el, prop, value) {
	// 요소(el), 속성(prop), 속성 값(value)
	if( !value ) {
		// 사용자가 value를 설정하지 않았을 때, 처리되는 블럭 코드 구간
		return el.getAttribute(prop);
	} else {
		// 사용자가 value를 설정했을 때, 처리되는 블럭 코드 구간
		el.setAttribute(prop, value);
	}
}

/**
 * css()
 * 부모 요소 내부에서 자신(요소 노드)을 제거하는 함수
 * css($('body'), 'color');        // GET
 * css($('body'), 'color', 'red'); // SET
 * --------------------------------
 */
function css(el, prop, value) {
	if (!value) {
		if ( prop.match(/:/) ) {
			__setStyle(el, prop);
		}
		return __getStyle(el, prop);
	} else {
		__setStyle(el, prop, value);
	}
}

function __getStyle(el, prop) {
	if ( window.getComputedStyle ) {
		// IE 9+
		return window.getComputedStyle(el)[prop];
	} else {
		// IE 8-
		return el.currentStyle[prop];
	}
}

function __setStyle(el, prop, value) {
	if ( typeof prop === 'string' && prop.match(/:/) ) {
		el.style.cssText = prop;
	} else {
		el.style[prop] = value;
	}

}

/**
 * hasClass()
 * addClass()
 * removeClass()
 * toggleClass()
 * 요소노드에 class 속성이 있는 확인하는 헬퍼 함수
 * hasClass( $('#app'), 'container' )
 * --------------------------------
 */

function hasClass(el, className) {
	var reg          = new RegExp('(\\s|^)'+ className +'(\\s|$)', 'ig'),
		currentClass = attr(el, 'class');
	if (!currentClass) { return false; }
	return currentClass.match(reg) ? true : false;
}

function addClass(el, className) {
	if ( !hasClass(el, className) ) {
		var oldClassName = attr(el, 'class') || '';
		attr(el, 'class',  (oldClassName + ' ' + className).trim() );
	}
}

function removeClass(el, className) {
	if ( hasClass(el, className) ) {
		attr(el, 'class', ( attr(el, 'class').replace(className, '') ).trim() );
	}
}

function toggleClass(el, className) {
	hasClass(el, className) ?
		removeClass(el, className) :
		addClass(el, className);
}


/**
 * DIM 요소를 생성하는 헬퍼 함수
 * sign [id 속성 값]
 * bgColor [css 배경색]
 */
function createDim(sign, cssValue) {
	var body      = $('body'),
		dim_layer = createEl('div');
	if (cssValue) {
		css(dim_layer, 'position:fixed; z-index:100; top:0; left:0; width:100%; height:100vh; background:' + cssValue + ';');
	} else {
		css(dim_layer, 'position:fixed; z-index:100; top:0; left:0; width:100%; height:100vh; background:rgba(0,0,0,0.5);');
	}
	attr(dim_layer, 'id', sign);
	append(body, dim_layer);
	dim_layer.onclick = removeDim || null;
	return dim_layer;
}

/**
 * --------------------------------
 * .trim()
 * --------------------------------
 */
if(!('trim' in String.prototype)) {
    String.prototype.trim= function() {
		return this.replace(/^\s+/, '').replace(/\s+$/, '');
	};
};
