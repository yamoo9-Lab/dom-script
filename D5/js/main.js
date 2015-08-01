/*! main.js © yamoo9.net, 2015 */

// IIFE 패턴
(function(global){

// Javascript MVC
// Model (구조)
// View (표현)
// Controller (동작)

// 모듈 패턴 구현
// 캡슐화 (다른 사람과의 코드 충돌 방지)

// 조작할 대상 선택
// nav .lv-1 > li
// nav .lv-1 > li > a

// 각 대상에 이벤트 설정
// nav .lv-1 > li === mouse events [ enter | leave ]
// nav .lv-1 > li > a === keyboard events [ focus | blur ]

// 이벤트 핸들러 (함수)
// function expandMenu() {

// }
// function collapseMenu() {

// }


/**
 * --------------------------------
 * 문서에서 내비게이션 컴포넌트를 적용할
 * 문서 객체 참조
 * --------------------------------
 */
var gnb     = $('#gnb'),
	gnb_lv1 = find(gnb, '.lv-1'); // #gnb .lv-1

gnb_lv1.onmouseenter = function () {
	console.log(this);
};




})(window);