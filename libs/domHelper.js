// 맛보기!! 크로스 브라우징 헬퍼 함수를 만들어보자!!!
function getStyle(el, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(el)[prop];
	} else {
		return el.currentStyle[prop];
	}
}

function addTitle(el, title) {
		if ( el.nodeType === 1 ) {
			el.setAttribute('title', title);
		}
	}

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

function addClass(el, className) {
	if ( el.nodeName && !hasClass(el, className) ) {
		el.className += ' ' + className;
	}
}

function removeClass(el, className) {
	if (el.nodeName && hasClass(el, className) ) {
		el.className = el.className.replace(className, '').trim();
	}
}