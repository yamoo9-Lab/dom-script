// 문서에서 대상을 선택하는 방법
// 옛날 DOM 방식
var body = document.body;
// Element Name (tagName)으로 찾는 방법
// var body = document.getElementsByTagName('body').item(0);
var body = document.getElementsByTagName('body')[0]; // 노드리스트(집합)
// id 속성 값으로 찾는 방법
var app = document.getElementById('app');
// class 속성 값으로 찾는 방법 IE 9+
var memo1 = document.getElementsByClassName('memo-1')[0]; // 노드리스트(집합)

// IE 8 이상 브라우저에서 전혀 문제가 없는 방법
// jQuery 힌트(Sizzle) -> CSS 선택자를 사용해서 대상을 선택하는 방법
// CSS 선택자를 질의하다(질문한다)
// .querySelector('CSS 선택자 표현식')    // 단수
// .querySelectorAll('CSS 선택자 표현식') // 복수

var body = document.querySelector('body');
var app  = document.querySelector('#app');
var memo = document.querySelectorAll('[class*="memo-"]');



var app = selector('#app')[0];
var memo = selector('[class*=memo-]');