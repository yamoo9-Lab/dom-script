### W3C DOM API vs innerText/innerHTML
- [MDN - Node.textContent](https://developer.mozilla.org/ja/docs/Web/API/Node/textContent)
- [MDN - Using the W3C DOM](https://developer.mozilla.org/en-US/docs/Using_Web_Standards_in_your_Web_Pages/Using_the_W3C_DOM)
- [Benchmark - W3C DOM vs. innerHTML](http://www.quirksmode.org/dom/innerhtml.html)

-

### Detecting Scroll Position
- [Stiky Scroll](http://blog.grayghostvisuals.com/js/detecting-scroll-position/)

### Cross-browser element.classList
- [classList.js](https://github.com/eligrey/classList.js)

---

### DOMScript 메소드 정리

#### 탐색/선택(Traversing)

```js
// ID를 통해서 요소를 찾을 때
document.getElementById()
// TAG 이름을 통해서 요소를 찾을 때
document.getElementsByTagName()
// CLASS를 통해서 요소를 찾을 때
document.getElementsByClassName()

// IE 8+ 이라면 아래 코드를 사용해주세요.
// 아래 주소의 코드는 IE7에서도 동작
// https://gist.github.com/chrisjlee/8960575
document.querySelector() // 요소노드 하나 반환
document.querySelectorAll() // 노드리스트 반환
```

#### 조작(Manipulation)

```js
// 탐색
element_node.childNodes; // 모든 자식 노드 수집
element_node.children; // 자식 요소 노드만 수집
element_node.firstChild == element_node.childNodes[0];
element_node.lastChild == element_node.childNodes[element_node.childNodes.length - 1];

// 생성
var new_div = document.createElement('div'); // <div></div> 생성
var new_text = document.createTextNode('I\'m Division Element'); // 텍스트노드 생성
var page = document.querySelector('#page');

// 추가/삽입
new_div.appendChild(new_text); // <div>I'm Division Element</div>
page.appendChild(new_div); // <div id="page"><div>I'm Division Element</div></div>

```