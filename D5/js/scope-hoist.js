/**
 * --------------------------------
 * Scope & Hoist
 * 영역과 끌어올리기
 * --------------------------------
 */

// console.log(showMeTheMoney());
// console.log(getSomeMoney());
// console.log(drink);

var drink = '소다';

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
}