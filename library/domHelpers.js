/**
 * DOM 요소 선택 함수
 */
var $ = selector;

function selector(ex) {
	// 함수 사용 시, 오류를 확인하기 위해 유효성검사
	// ex 값은 반드시 문자열이어야만 한다.
	if (typeof ex !== 'string') {
		console.error('CSS 선택자 표기식을 문자열을 인자로 전달해야 합니다.')
	}

	var list     = document.querySelectorAll(ex),
		list_len = list.length;

	switch(list_len) {
		case 0:
			return null;
		break;
		case 1:
			return list[0];
		break;
	}

	return list;
}

/**
 * find() 헬퍼함수
 * find($('body'), 'a')
 * --------------------------------
 */
function find(parentEl, childSelector) {
	if ( !parentEl.nodeName || typeof childSelector !== 'string' ) {
		console.error('첫번째 인자는 돔 객체를, 두번째 인자는 문자열을 넣어야 합니다.');
	}
	var children = parentEl.querySelectorAll(childSelector);
	var children_len = children.length;

	switch(children_len) {
		case 0: return null;
		break;
		case 1: return children[0];
		break;
		default: return children;
	}

	// if (children_len === 0) {
	// 	return null;
	// } else if ( children_len === 1 ) {
	// 	return children[0];
	// } else {
	// 	return children;
	// }
}



/**
 * DOM 요소/텍스트 노드 추가 헬퍼함수
 */
function createEl(name) {
	return document.createElement(name);
}

function createText(content) {
	return document.createTextNode(content);
}

/**
 * DOM 조작 함수
 * 부모 요소 내부에 자식 요소를 마지막 자식 요소로 추가하는 함수
 */
function hasClass (el, className) {
	var currentClass = attr(el, 'class');
	if (currentClass === null) { return false; }
	var reg = new RegExp(className, 'ig');
	if ( currentClass.match(reg) ) {
		return true;
	} else {
		return false;
	}
}
function addClass (el, className) {
	if ( !hasClass(el, className) ) {
		// el.className += ' ' + className;
		// el.setAttribute( 'class', el.getAttribute('class') + ' ' + className );
		var oldClassName = attr(el, 'class');
		if (oldClassName === null ) {
			oldClassName = '';
		}
		attr(el, 'class',  oldClassName + ' ' + className);
	}
}
function removeClass (el, className) {
	if ( hasClass(el, className) ) {
		attr(el, 'class',  attr(el, 'class').replace(className, ''));
	}
}
function toggleClass (el, className) {
	if ( hasClass(el, className) ) {
		removeClass(el, className);
	} else {
		addClass(el, className);
	}
}



function append(parentEl, childEl) {
	parentEl.appendChild(childEl);
}

function remove(childEl) {
	childEl.parentNode.removeChild(childEl);
}

function css(el, prop, value) {
	if (!value) {
		if ( prop.match(/:/) ) {
			setStyle(el, prop);
		}
		return getStyle(el, prop);
	} else {
		setStyle(el, prop, value);
	}
}

function getStyle(el, prop) {
	if ( window.getComputedStyle ) {
		// IE 9+
		return window.getComputedStyle(el)[prop];
	} else {
		// IE 8-
		return el.currentStyle[prop];
	}
}

function setStyle(el, prop, value) {
	if ( typeof prop === 'string' && prop.match(/:/) ) {
		el.style.cssText = prop;
	} else {
		el.style[prop] = value;
	}

}

/**
 * DIM 요소를 생성하는 헬퍼 함수
 * sign [id 속성 값]
 * bgColor [css 배경색]
 */
function createDim(sign, cssValue) {
	var body = selector('body'),
		dim_layer = createEl('div');

	attr(dim_layer, 'id', sign);

	if (cssValue) {
		css(dim_layer, 'position:fixed; z-index:100; top:0; left:0; width:100%; height:100vh; background:' + cssValue + ';');
	} else {
		css(dim_layer, 'position:fixed; z-index:100; top:0; left:0; width:100%; height:100vh; background:rgba(0,0,0,0.5);');
	}

	append(body, dim_layer);

	dim_layer.onclick = removeDim;

	return dim_layer;
}

/**
 * 속성을 가져오거나, 설정하는 헬퍼함수
 * attr($('body'), 'class'); // GET
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