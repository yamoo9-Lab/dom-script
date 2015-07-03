## 문서객체모델(DOM)과 자바스크립트(Javascript)

```js
/**
 * 문서 객체 모델 [DOM: Document Object Model]
 */
#document
	html          [ document.documentElement ]
		head      [ document.head ]
			meta
			title
		body      [ document.body ]
```


## 자바스크립트를 작성하는 곳
* head 내부 뒷 부분 (`<link>` 뒤)
* body 내부 어디든... (앞, 중간, 뒤)


## 자바스크립트 엔진 해석

HTML 문서를 해석하는 엔진은 Javascript 코드를 만나면 Javasvript 해석기에게 일을 맡기고 쉰다.(일을 하지 않는다) 가능하다면 Javascript 코드는 UI가 완성되는데 시간을 지체하지 않도록 하는 것이 중요하다. 권장하는 스크립트 코드의 위치는 `</body>` 바로 앞이다.


#### 자바스크립트 디자인 패턴 (설계 규칙)

1. **선택** `Selecting` ─ 제어할 대상을 찾는 것

	```js
		document.body // body element
	```

2. **조작** `Manipulation` ─ 선택한 대상을 조작하는 것

	```js
		var body = document.body;
		document.body.style.background = '#fcfae1';
		console.log(body.style.background); // #fcfae1
	```

3. **시점** `Event` ─ 대상에 언제 스타일을 설정할 것인가?

	```js
		// var body = document.body;
		document.body.onclick = function() {
			this.style.color: '#FE4940';
		};
	```
