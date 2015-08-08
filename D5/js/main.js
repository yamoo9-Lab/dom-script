(function(global, _){

	// DOM 객체 참조
	var gnb           = _.$('#gnb'),
		gnb_lv1       = _.$('.lv-1', gnb),
		gnb_lv2       = _.$('.lv-2', gnb_lv1),
		gnb_last_link = _.last(gnb, 'a');

	// 이벤트 핸들링 대상 찾기
	var lv1_li = _.children( gnb_lv1, 'li' );

	// _.each() 반복 구문 활용
	_.each(lv1_li, function(item, index) {
		// 이벤트 연결
		item.onmouseenter = openMenu;
		item.onmouseleave = closeMenu;
		// item === <li>
		var item_a = _.children(item, 'a');
		item_a.onfocus = openMenu;
	});

	// 마지막 a 요소 blur 이벤트 발생 시, closeMenu 함수 실행
	gnb_last_link.onblur = closeMenu.bind( _.parent(gnb_last_link, 3) );

	// 이벤트 핸들러 [메뉴 열기 | 메뉴 닫기]
	function openMenu() {
		var node = this.nodeName.toLowerCase(); // li, a
		if (node === 'a') {
			_.radioClass( _.parent(this) , 'on');
		} else {
			_.addClass(this, 'on');
		}
		// 마우스가 올라간 li 요소에 on 클래스 추가
	}

	function closeMenu() {
		// 마우스가 올라간 li 요소에 on 클래스 제거
		_.removeClass(this, 'on');
	}


})(window, window.yamoo9);