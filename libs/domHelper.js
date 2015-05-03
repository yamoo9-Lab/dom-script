
function css(el, prop, value) {
	if (value) {
		setStyle(el, prop, value);
	} else {
		return getStyle(el, prop);
	}
}

function getStyle(el, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(el)[prop];
	} else {
		return el.currentStyle[prop];
	}
}

function setStyle(el, prop, value) {
	el.style[prop] = value;
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