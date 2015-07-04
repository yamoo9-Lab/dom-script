### 프리 테스트
1. 3초마다 `<body>` 요소의 배경색을 바뀌게 설정해보세요.
2. `<html>`, `<head>`, `<body>` 이 3개 요소를 각각의 변수 명에 할당(Assign)한 후, 콘솔(Console)에 출력(Log)해보세요.

---

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

**변수 정의 및 할당, 콘솔에 기록**
```js
/**
 * 변수란? 변할 수 있는 수
 * x = -23;
 * y = x + 90; // -23 + 90 = 67
 *
 * 프로그래밍에서 변수란? 런타임 중에 변경이 가능한 메모리(공간)
 * 변수(Variables) -> var
 * 변수 정의 및 값 할당(대입)
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
```


## 자바스크립트를 작성하는 곳
* `<head>` 내부 뒷 부분 (`<link rel="stylesheet" href="style.css">` 뒤)
* `<body>` 내부 어디든... (앞, 중간, 뒤)

```html
<!DOCTYPE html>
<html lang="ko-KR">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta charset="UTF-8">
		<title>자바스크립트를 작성하는 곳</title>
		<link rel="stylesheet" href="style.css">
		<script>// <head> 내부 입력</script>
	</head>
	<body>
		<script>// <body> 시작 위치 입력</script>

		<div id="page">

			<script>// <body> 중간 위치 입력</script>

			<main></main>

			<script>// <body> 중간 위치 입력</script>

		</div>

		<script>// <body> 끝 위치 입력</script>
	</body>
</html>
```


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
