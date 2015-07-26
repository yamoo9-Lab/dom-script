/*
 * 딤 생성 버튼 (동적으로 추가)
 * --------------------------------
 */

var addDimBtnCode = '';
addDimBtnCode += '<button class="dim-button" type="button">create dim layer</button>';
$('body').innerHTML += addDimBtnCode;


/**
 * 이벤트 핸들링
 * --------------------------------
 */

$('.dim-button').onclick = function() {
	// 헬퍼함수 createDim() 실행
	createPopLayer({
		closeTxt: '×'
	});
	createDim('dim');
};

function removeDim () {
	remove( $('#dim') );
	remove( $('.popup-layer') );
}

/**
 * 레이어 팝업 생성
 * --------------------------------
 */

function createPopLayer (settings) {

	// 옵션 기본 값 객체 설정
	var defaults = {
		title      : 'Do you want Save this?',
		desc       : 'Lorem ipsum dolor sit amet, consectetur adipisicing',
		closeLabel : '팝업 레이어 닫기',
		closeTxt   : 'X'
	};

	// 옵션 오버라이딩: 사용자가 전달한 객체 설정이 없으면 기본 옵션을 사용
	if ( typeof settings !== 'object' || typeof settings === 'undefined' ) {
		settings = defaults;
	}

	for (var key in defaults) {
		settings[key] = settings[key] || defaults[key];
	}

	// HTML 템플릿
	var htmlCode = '';
	htmlCode += '<div class="popup-layer">';
	htmlCode += 	'<h3 class="popup-layer-title">'+ settings.title +'</h3>';
	htmlCode += 	'<div class="popup-layer-desc">'+ settings.desc +'</div>';
	htmlCode += 	'<div class="popup-layer-btnset">';
	htmlCode += 		'<button class="popup-layer-btnset-save" type="button">Save</button>';
	htmlCode += 		'<button class="popup-layer-btnset-cancel" type="button">Cancel</button>';
	htmlCode += 	'</div>';
	htmlCode += 	'<button class="popup-layer-close" aria-label="'+ settings.closeLabel +'">'+ settings.closeTxt +'</button>';
	htmlCode += '</div>';

	// 동적 생성
	$('body').innerHTML += htmlCode;

	$('.popup-layer-close').onclick = removeDim;

}
