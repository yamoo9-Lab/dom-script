/*
 * 딤 생성 버튼 (동적으로 추가)
 * --------------------------------
 */
// <button> 요소 노드 생성
var dimBtn = createEl('button');
// button 요소에 추가할 텍스트 노드 생성
var dimBtnTxt = createText('딤처리');
// <button> 요소 노드 class 속성 값(create-dim) 설정
dimBtn.setAttribute('class', 'create-dim');

// 헬퍼 함수 attr() 활용해서 dimBtn에 속성 설정
// attr(dimBtn, 'id', 'dimBtn');
attr(dimBtn, 'class', 'dim-button');

// console.log(attr(dimBtn, 'id'));
// console.log(attr(dimBtn, 'class'));

// <button> 요소 노드 내부에 생성한 텍스트 노드 마지막 자식 노드로 삽입
append(dimBtn, dimBtnTxt);

// <body> 요소 내부 마지막 자식 노드로 dimBtn을 삽입
append( $('body'), dimBtn );


// dimBtn 요소에 이벤트 핸들링
dimBtn.onclick = function() {
	// 헬퍼함수 createDim() 실행
	createDim('dim');
	createPopLayer({
		title: 'hi~ Tom',
		desc: 'I\'m Hungry',
		closeLabel: '나를 닫아줘'
	});
};



/**
 * 레이어 팝업 생성
 * --------------------------------
 */

// HTML4, XHTML1 비표준(사실상의 표준) vs HTML5 표준
// innerHTML 속성
// 문자열 접합

// popLayerOptions 객체 생성
var popLayerOptions = {
	title      : 'Do you want Save this?',
	desc       : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos.',
	closeLabel : '팝업 레이어 닫기'
};

// popLayer.title = 'Do you want Save this?';
// popLayer.desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos.';
// popLayer.closeLabel = '팝업 레이어 닫기';

// 변수는 데이터를 단 하나만 가질 수 있어요.
// 객체(Object)는 다수의 변수를 소유할 수 있어요.
// 아이폰.재질, 아이폰.색상, 아이폰.무게, 아이폰.가격
// 아이폰.전화걸다(), 아이폰.인터넷하다()

function createPopLayer (settings) {
	// 유효성 검사
	if ( typeof settings !== 'object' ) {
		throw new TypeError('Error Message');
		console.error('setttings 전달인자의 데이터 형은 객체({})를 전달해야 합니다.');
	}
	var htmlCode = '';
	htmlCode    += '<div class="popup-layer">';
	htmlCode    += 	'<h3 class="popup-layer-title">'+ settings.title +'</h3>';
	htmlCode    += 	'<p class="popup-layer-desc">'+ settings.desc +'</p>';
	htmlCode    += 	'<div class="popup-layer-btnset">';
	htmlCode    += 		'<button class="popup-layer-btnset-save" type="button">Save</button>';
	htmlCode    += 		'<button class="popup-layer-btnset-cancel" type="button">Cancel</button>';
	htmlCode    += 	'</div>';
	htmlCode    += 	'<button class="popup-layer-close" aria-label="'+ settings.closeLabel +'">X</button>';
	htmlCode    += '</div>';

	$('body').innerHTML += htmlCode;
}



// // -----------------------------------------------------------------------------------------------
// // .popup-layer 동적 생성
// var popLayer = createEl('div');
// // .popup-layer 속성 설정
// attr(popLayer, 'class', 'popup-layer');
// // .popup-layer body 요소에 삽입
// append($('body'), popLayer);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-title 동적 생성
// var popLayerTitle = createEl('h3');
// // .popup-layer-title 텍스트 콘텐츠 동적 생성
// var popLayerTitleTxt = createText('Do you want Save this?');

// // .popup-layer-title 요소에 텍스트 콘테츠 삽입
// append(popLayerTitle, popLayerTitleTxt);
// // .popup-layer 요소에 .popup-layer-title 삽입
// append(popLayer, popLayerTitle);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-desc 동적 생성
// var popLayerDesc = createEl('p');
// // .popup-layer-desc 텍스트 콘텐츠 동적 생성
// var popLayerDescTxt = createText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos.');

// // .popup-layer-desc 요소에 텍스트 콘테츠 삽입
// append(popLayerDesc, popLayerDescTxt);
// // .popup-layer 요소에 .popup-layer-desc 삽입
// append(popLayer, popLayerDesc);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-btnset 동적 생성
// var popLayerbtnset = createEl('div');
// attr(popLayerbtnset, 'class', 'popup-layer-btnset');
// append(popLayer, popLayerbtnset);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-btnset-save 동적 생성
// var popLayerbtnsetSave = createEl('button');
// var popLayerbtnsetSaveTxt = createText('Save');
// attr(popLayerbtnsetSave, 'class', 'popup-layer-btnset-save');
// attr(popLayerbtnsetSave, 'type', 'button');

// append(popLayerbtnsetSave, popLayerbtnsetSaveTxt);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-btnset-cancel 동적 생성
// var popLayerbtnsetCancel = createEl('button');
// var popLayerbtnsetCancelTxt = createText('Cancel');
// attr(popLayerbtnsetCancel, 'class', 'popup-layer-btnset-cancel');
// attr(popLayerbtnsetCancel, 'type', 'button');

// append(popLayerbtnsetCancel, popLayerbtnsetCancelTxt);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-btnset에 생성한 Save, Cancel 버튼 삽입
// append(popLayerbtnset, popLayerbtnsetSave);
// append(popLayerbtnset, popLayerbtnsetCancel);

// // -----------------------------------------------------------------------------------------------
// // .popup-layer-close 동적 생성
// var popLayerClose = createEl('button');
// var popLayerCloseTxt = createText('X');

// attr(popLayerClose, 'class', 'popup-layer-close');
// attr(popLayerClose, 'aria-label', '팝업 레이어 닫기');

// append(popLayerClose, popLayerCloseTxt);
// append(popLayer, popLayerClose);
