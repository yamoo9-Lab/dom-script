```js
// 웹디자인: 문서 <- document, *.js
// 포토샵: 활성화된 문서 <- activeDocument, *.jsx
// DOM: 문서에 접근
// JS에서 문서에 접근하는 방식

#document
	html      [ document.documentElement ]
		head    [ document.head ]
			meta
			title
		body    [ document.body ]

```

#### 자바스크립를 작성하는 곳
1. head 내부
2. body 내부 어디에서나~ (앞, 중간, 뒤)


#### 자바스크립트의 해석에 대한 진실!!!
HTML 문서를 해석하는 엔진은 Jascript 코드를 만나면
Javasvript 해석기에게 일을 맡기고, 쉰다.(일을 하지 않는다.)
고로.. 가급적 Javascript 코드는 UI가 완성되는데 시간을 지체하지 않도록 하는 것이 중요하다.
권장하는 스크립트 코드의 위치는 \</body\> 끝나기 위의 위치이다.


#### 자바스크립트의 디자인(설계) 패턴(규칙)
1. 제어할 대상을 찾는 것 (선택자, DOM을 통해서 찾는 것)
	```js
		document.body // body element
	```
2. 대상에 설정된 스타일 값을 가져오거나(GET), 설정하는(SET) 것
	```js
		document.body.style.background = 'tan';
	```
3. 언제??? 대상에 스타일을 설정할 것인가??? (시점: Event)
	```js
		// var body = document.body;
		document.body.onclick = function() {
			this.style.color: 'lime';
		};
	```
