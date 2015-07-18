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

	var currentPos;

	switch( e.target.getAttribute('class').replace('btn-', '') ) {
		case 'left':
			currentPos = parseInt( css(flying, 'left') );
			currentPos -= 30;
			css(flying, 'left', currentPos + 'px');
		break;
		case 'right':
			currentPos = parseInt( css(flying, 'left') );
			currentPos += 30;
			css(flying, 'left', currentPos + 'px');
		break;
		case 'top':
			currentPos = parseInt( css(flying, 'top') );
			currentPos -= 30;
			css(flying, 'top', currentPos + 'px');
		break;
		case 'bottom':
			currentPos = parseInt( css(flying, 'top') );
			currentPos += 30;
			css(flying, 'top', currentPos + 'px');
		break;
	}

}