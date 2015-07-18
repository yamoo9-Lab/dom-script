/**
 * DOM 요소 선택 함수
 */

function selector(ex) {

	try {
		var list     = document.querySelectorAll(ex),
			list_len = list.length;
		switch(list_len) {
			case 0:
				return null;
			break;
			case 1:
				return list[0];
			break;
		}
		return list;
	} catch(e) {
		console.error(e.message);
	}

}

// function selector(ex) {
// 	// 함수 사용 시, 오류를 확인하기 위해 유효성검사
// 	// ex 값은 반드시 문자열이어야만 한다.
// 	if (typeof ex !== 'string') { console.error('CSS 선택자 표기식을 문자열을 인자로 전달해야 합니다.') }

// 	var list     = document.querySelectorAll(ex),
// 		list_len = list.length;
// 	switch(list_len) {
// 		case 0:
// 			return null;
// 		break;
// 		case 1:
// 			return list[0];
// 		break;
// 	}
// 	return list;
// }