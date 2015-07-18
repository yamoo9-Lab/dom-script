/**
 * DOM 요소 선택 함수
 */
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
function append(parentEl, childEl) {
	parentEl.appendChild(childEl);
}

function css(el, cssCode) {
	el.style.cssText = cssCode;
}

/**
 * DIM 요소를 생성하는 헬퍼 함수
 * sign [id 속성 값]
 * bgColor [css 배경색]
 */
function createDim(sign, bgColor) {
	var body = selector('body'),
		dim_layer = createEl('div');
	dim_layer.setAttribute('id', sign);
	if (bgColor) {
		css(dim_layer, 'background-color: ' + bgColor);
	}
	append(body, dim_layer);
}