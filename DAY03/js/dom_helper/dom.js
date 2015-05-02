// 다음요소를 찾는 헬퍼함수
function nextEl(el) {
	if ( el.nextElementSibling ) {
		return el.nextElementSibling;
	} else {
		while( el.nextSibling ) {
			if ( el.nextSibling.nodeType !== 1 ) {
				el = el.nextSibling;
			} else {
				return el.nextSibling;
			}
		}
	}
}

// 이전요소를 찾는 헬퍼함수
function prevEl(el) {
	if ( el.previousElementSibling ) {
		return el.previousElementSibling;
	} else {
		while( el.previousSibling ) {
			if ( el.previousSibling.nodeType !== 1 ) {
				el = el.previousSibling;
			} else {
				return el.previousSibling;
			}
		}
	}
}

// 첫번째 자식요소를 찾는 헬퍼함수
function firstEl(el) {
	if(el.firstElementChild) {
		return el.firstElementChild;
	} else {
		if(el.firstChild.nodeType === 1) {
			return el.firstChild;
		} else {
			return nextEl(el.firstChild);
		}
	}
}

// 마지막 자식요소를 찾는 헬퍼함수
function lastEl(el) {
	if(el.lastElementChild) {
		return el.lastElementChild;
	} else {
		if(el.lastChild.nodeType === 1) {
			return el.lastChild;
		} else {
			return prevEl(el.lastChild);
		}
	}
}