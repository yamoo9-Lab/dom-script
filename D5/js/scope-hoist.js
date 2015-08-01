/**
 * --------------------------------
 * Scope & Hoist
 * 영역과 끌어올리기
 *
 * 자바스크립트 엔진은 코드를 해석할 때,
 * 영역 내 존재하는 var, function 코드 문을
 * 영역 최상단 위로 끌어올린다. - 호이스트 현상
 * --------------------------------
 */

// console.log(showMeTheMoney());
// console.log(getSomeMoney());
// console.log(drink);

/*var drink = '소다';

var getSomeMoney = function() {

	if (drink) {
		var drink = '환타';
	}

	console.log('get some money!!');
	console.log('drink is: ', drink);
};

getSomeMoney();

function showMeTheMoney() {
	console.log('show me the money!!');
}*/

/**
 * --------------------------------
 * 함수
 * - 선언
 * - 호출
 * - 확장
 * - 종료 return
 * - 반환 return
 * --------------------------------
 */

var finish_function = false;


function isOk(condition, error_message) {
	// if ( finish_function ) { return; }
	return condition ? 'ok' : error_message ? error_message : 'Error!!!';
	console.log('finish function');
}
