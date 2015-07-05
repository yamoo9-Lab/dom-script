/*! app.js © yamoo9.net, 2015 */

/**
 * 문서 객체에 접근하는 방법(DOM API)
 * ----------------------------------------
 * ID 속성 값으로부터 대상(요소노드)을 참조하는 방법
 * TagName, nodeName으로 대상(요소노드)을 참조하는 방법
 */
// var page = document.getElementById('page');

// console.log(page);

var header, main, sidebar, footer;

header  = document.getElementById('header');
main    = document.getElementById('main');
sidebar = document.getElementById('sidebar');
footer  = document.getElementById('footer');

console.log(header, main, sidebar, footer);

/**
 * 복수 형태의 요소를 수집하는 것 : HTML Collection, NodeList
 * document.getElementsByTagName('div'); => [div, div, div, div]
 */
var div = document.getElementsByTagName('div');

console.log(div);