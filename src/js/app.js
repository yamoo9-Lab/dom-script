/*! app.js © yamoo9.net, 2015 */

/**
 * 변수란? 변할 수 있는 수
 * 런타임 중에 변경이 가능한 메모리(공간)
 * 변수 === Variables -> var
 * x = -23;
 * y = x + 90; // 112
 * var x = -23;
 * --------------------------------
 */

// 변수 정의
var html; // undefined
var head;
var body;

// 변수에 값 할당
html = document.documentElement;
head = document.head;
body = document.body;

// 콘솔에 기록
console.log(html, head, body);