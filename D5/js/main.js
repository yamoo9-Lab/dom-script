(function(global, _){

	// DOM 객체 참조
	var gnb     = _.$('#gnb'),
		gnb_lv1 = _.$('.lv-1', gnb),
		gnb_lv2 = _.$('.lv-2', gnb_lv1);

	// 이벤트 핸들링 대상 찾기
	var lv1_li = _.children( gnb_lv1, 'li' );

	// _.each() 반복 구문 활용
	_.each(lv1_li, function(item, index) {
		// 이벤트 연결
		item.onmouseenter = openMenu;
		item.onmouseleave = closeMenu;
	});

	// 이벤트 핸들러 [메뉴 열기 | 메뉴 닫기]
	function openMenu() {
		// 마우스가 올라간 li 요소에 on 클래스 추가
		_.addClass(this, 'on');
	}

	function closeMenu() {
		// 마우스가 올라간 li 요소에 on 클래스 제거
		_.removeClass(this, 'on');
	}


})(window, window.yamoo9);