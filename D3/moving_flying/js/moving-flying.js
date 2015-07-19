var controller = selector('.controller');
var flying = selector('#flying');

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
		break;
	}

}

function move(el, direction, distance) {
	var currentPos = parseInt( css(flying, direction) );
	currentPos += distance;
	css(flying, direction, currentPos + 'px');
}