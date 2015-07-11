/*! tab.js © yamoo9.net, 2015 */

// 탭 위젯에 접근해서 탭 메뉴아이템을 수집해 옵니다.
var tab          = document.querySelector('.tab'),
	tab_menuitem = tab.querySelectorAll('.tab-menuitem');

function hasClass(el, name) {
	var check_class = el.getAttribute('class');
	if (check_class === null) {return false;}
	if ( check_class.indexOf(name) === -1 ) {
		return false;
	} else {
		return true;
	}
}

// addClass() 헬퍼 함수
function addClass(el, name) {
	// 전달 받은 el의 class 속성을 확인합니다.
	var check_class = el.getAttribute('class');
	// name과 같은지 확인합니다.
	// if ( check_class.indexOf(name) > -1 ) {
	// 	// 만약에 같은게 있다면
	// 	// alert('class 속성에 이미 존재하고 있습니다.');
	// } else {
	// 	// 만약에 같은게 없다면, name을 class 속성에 추가합니다.
	// 	el.setAttribute('class', check_class + ' ' + name);
	// }
	if ( !hasClass(el, name) ) {
		el.setAttribute('class', check_class + ' ' + name);
	}
}

// removeClass()
function removeClass(el, name) {
	var current_class = el.getAttribute('class');
	var change_class = current_class.replace(name, '');
	el.setAttribute('class', change_class);
}

 // 3

for(var n = tab_menuitem.length-1; n > -1; n--) { // n = 3
	// n = 2
	// console.log(n);

	// 탭 위젯의 메뉴아이템을 클릭하면 이벤트 핸들러가 처리됩니다.
	// 클릭하면 해당되는 요소에 class 속성을 부여한다. active
	tab_menuitem[n].onclick = function() {
		// var old_classes = this.getAttribute('class');
		// console.log(old_classes);
		// this.setAttribute('class', old_classes + ' active');

		// addClass() 헬퍼 함수 사용

		// .tab-menubar 내부의 .tab-menuitem 중에 active 클래스를 가진 아이에게서 active 클래스를 제거한다.
		var cur_active_el = tab.querySelector('.tab-menubar').querySelector('.active');

		removeClass(cur_active_el, 'active');

		// this에 active 클래스를 설정한다.
		addClass(this, 'active');

		// 네이티브 classList 방식을 사용
		// this.classList.add('selected');
		// 브라우저 기본 동작 차단
		return false;
	}
}