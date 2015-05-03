var html    = document.documentElement;
var mobile  = 320;
var tablet  = 768;
var desktop = 1100;
var viewportW;
var dvp       = document.querySelector('.detect-viewport');
var dvpClass  = dvp.className;
var shapeArea = dvp.firstChild;
// console.log(shapeArea);
// var htmlClass = html.className;
// console.log(dvp);

function detectViewportWidth() {
	viewportW = window.innerWidth || html.clientWidth;
	if ( viewportW < tablet ) {
		dvpClass = 'mobile';
		dvp.setAttribute('class', dvpClass);
	} else if ( viewportW >= tablet && viewportW < desktop) {
		dvpClass = 'tablet';
		dvp.setAttribute('class', dvpClass);
	} else {
		dvpClass = 'desktop';
		dvp.setAttribute('class', dvpClass);
	}
	dvp.innerText = dvpClass;
}

// helper function


window.onload = window.onresize = detectViewportWidth;