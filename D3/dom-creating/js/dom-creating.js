// library/dom-helpers.js 의존

// 문서에서 #app 요소를 찾아 참조합니다.
var app = selector('#app');

// 동적으로 header 요소를 생성해야 합니다.
var header = document.createElement('header');
// console.log(header);

// 동적으로 h1 요소를 생성해야 합니다.
var header_h1 = document.createElement('h1');
// console.log(header_h1);

// 동적으로 h1 요소 내부에 텍스트 'DOM 요소 추가'를 삽입해야 합니다.
var h1_text = document.createTextNode('DOM 요소 추가');
// console.log(h1_text);
header_h1.appendChild(h1_text);

// console.log(header_h1.outerHTML);

// h1 요소의 부모가 header가 되도록 설정합니다.
header.appendChild(header_h1);

// header 요소의 부모가 #app이 되도록 설정합니다.
app.appendChild(header);