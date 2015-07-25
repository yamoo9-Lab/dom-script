/*
 * 딤 생성 버튼 (동적으로 추가)
 * --------------------------------
 */

var addDimBtnCode = '';
addDimBtnCode += '<button class="dim-button" type="button">딤처리</button>';
$('body').innerHTML += addDimBtnCode;

// // <button> 요소 노드 생성
// var dimBtn = createEl('button');

// // button 요소에 추가할 텍스트 노드 생성
// var dimBtnTxt = createText('딤처리');

// // 헬퍼 함수 attr() 활용해서 dimBtn에 속성 설정
// attr(dimBtn, 'class', 'dim-button');

// // <button> 요소 노드 내부에 생성한 텍스트 노드 마지막 자식 노드로 삽입
// append(dimBtn, dimBtnTxt);

// // <body> 요소 내부 마지막 자식 노드로 dimBtn을 삽입
// append( $('body'), dimBtn );



/**
 * 이벤트 핸들링
 * --------------------------------
 */

$('.dim-button').onclick = function() {
	// 헬퍼함수 createDim() 실행
	createDim('dim');
	createPopLayer();
};



/**
 * 레이어 팝업 생성
 * --------------------------------
 */

function createPopLayer (settings) {

	// 옵션 기본 값 객체 설정
	var defaults = {
		title      : 'Do you want Save this?',
		desc       : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos.',
		closeLabel : '팝업 레이어 닫기'
	};

	// 옵션 오버라이딩: 사용자가 전달한 객체 설정이 없으면 기본 옵션을 사용
	if ( typeof settings !== 'object' || typeof settings === 'undefined' ) {
		settings = defaults;
	}

	// 사용자 정의 설정 값이 없는 속성의 경우는
	// 기본 설정 값(defaults)의 속성으로 대체한다.

	// if ( !settings.title ) {
	// 	settings.title = defaults.title;
	// }
	// if ( !settings.desc ) {
	// 	settings.desc = defaults.desc;
	// }
	// if ( !settings.closeLabel ) {
	// 	settings.closeLabel = defaults.closeLabel;
	// }

	// ------------------------------------------------------------------------

	// 3항 연산식
	// (조건) ? (참) : (거짓)
	// isIronMan ? 'Yes. I\'m IronMan.' : 'No. I\'m not IronMan.'

	// if(조건) {
	// 	(참)
	// } else {
	// 	(거짓)
	// }


	settings.title      = settings.title ? settings.title : defaults.title;
	// settings.desc       = settings.desc ? settings.desc : defaults.desc;
	// settings.closeLabel = settings.closeLabel ? settings.closeLabel : defaults.closeLabel;

	// ------------------------------------------------------------------------

	settings.title      = settings.title || defaults.title;
	settings.desc       = settings.desc || defaults.desc;
	settings.closeLabel = settings.closeLabel || defaults.closeLabel;



	// HTML 템플릿
	var htmlCode = '';
	htmlCode += '<div class="popup-layer">';
	htmlCode += 	'<h3 class="popup-layer-title">'+ settings.title +'</h3>';
	htmlCode += 	'<div class="popup-layer-desc">'+ settings.desc +'</div>';
	htmlCode += 	'<div class="popup-layer-btnset">';
	htmlCode += 		'<button class="popup-layer-btnset-save" type="button">Save</button>';
	htmlCode += 		'<button class="popup-layer-btnset-cancel" type="button">Cancel</button>';
	htmlCode += 	'</div>';
	htmlCode += 	'<button class="popup-layer-close" aria-label="'+ settings.closeLabel +'">X</button>';
	htmlCode += '</div>';

	// 동적 생성
	$('body').innerHTML += htmlCode;

}
