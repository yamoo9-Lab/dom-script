var controller = y9.$('.controller');
var flying = y9.$('#flying');

// 이벤트 위임
controller.onclick = function(e) {
	// if (!e) {
	// 	e = window.event;
	// }
	// 크로스 브라우징을 위한 목적의 코드
	e = e || window.event;

	// 사용자가 누른 대상 (e.target)
	// 실제 이벤트가 걸린 부모 대상 (e.currentTarget)

	var direction = e.target.getAttribute('class').replace('btn-', ''),
		distance  = 200;

	switch( direction ) {
		case 'left':
			move(flying, 'left', -1 * distance);
		break;
		case 'right':
			move(flying, 'left', distance);
		break;
		case 'top':
			move(flying, 'top', -1 * distance);
		break;
		case 'bottom':
			move(flying, 'top', distance);
	}

}


document.onkeydown = function(event) {
	var key = event.keyCode || event.which, target;

	switch( key ) {
		case 37:
			target = y9.find(controller, '.btn-left');
		break;
		case 39:
			target = y9.find(controller, '.btn-right');
		break;
		case 38:
			target = y9.find(controller, '.btn-top');
		break;
		case 40:
			target = y9.find(controller, '.btn-bottom');
	}

	controller.onclick.call(controller, {'target': target});
	y9.addClass(target, 'on');
	setTimeout(function() {
		y9.removeClass(target, 'on');
	}, 150);

}


function move(el, direction, distance) {
	var currentPos = parseInt( y9.css(flying, direction) );
	currentPos += distance;
	y9.css(flying, direction, currentPos + 'px');
}