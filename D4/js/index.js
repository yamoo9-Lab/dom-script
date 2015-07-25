/**
 * 딤 생성 버튼 (동적으로 추가)
 * --------------------------------
 */
// <button> 요소 노드 생성
var dimBtn = createEl('button');
// button 요소에 추가할 텍스트 노드 생성
var dimBtnTxt = createText('딤처리');
// <button> 요소 노드 class 속성 값(create-dim) 설정
dimBtn.setAttribute('class', 'create-dim');

// <button> 요소 노드 내부에 생성한 텍스트 노드 마지막 자식 노드로 삽입
append(dimBtn, dimBtnTxt);

// <body> 요소 내부 마지막 자식 노드로 dimBtn을 삽입
append( $('body'), dimBtn );


/**
 * 딤 생성
 * --------------------------------
 */
