### Node.js + http-server
```sh
$ node -v
$ npm -v
$ npm i -g http-server
```

### http-server 명령
```sh
http-server -a localhost -p 90 -o
```


### Learning UI Design
- 라이트 박스(Lightbox)
- 슬라이드 갤러리(Gallery)
- 슬라이드 메뉴(Slide Menu)
- 레이지 로드(lazyLoad)
- 무비클립(MovieClip)[#](https://prospek.ca/en/team/#teammate_id_1690)

---

### A re-introduction to JavaScript

[JavaScript 재입문](https://developer.mozilla.org/ko/docs/A_re-introduction_to_JavaScript#.EB.A9.94.EB.AA.A8.EB.A6.AC_.EB.88.84.EC.B6.9C) | `클로저(Closure) & 메모리 누수(Memory Leaks)`


-

#### JS 데이터 유형(객체)
- 숫자(Number)
- 문자(String)
- 논리(Boolean)
- 함수(Function)
- 배열(Array)
- 객체(Object)

#### JS 특별 유형(비객체)
- null
- undefined

#### 수업 시간에 미처 다루지 못한 JS 내장된 객체
- [수학(Math)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [날짜(Date)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [정규표현식(RegExp)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [오류(Error)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)

---

#### 사용자 정의 객체
생성자 함수와 프로토타입

```js
// 생성자(Contructor)
var UserDefineObject = function() {...};

// 프로토타입(Prototype)
UserDefineObject.prototype.method1 = function() {...};
UserDefineObject.prototype.method2 = function() {...};

// 인스턴스 생성(프로토타입 객체에 연결)
var udoA = new UserDefineObject;
var udoB = new UserDefineObject;
var udoC = new UserDefineObject;
```

```js
// 생성자(Contructor)
var UserDefineObject = function() {...};

// 프로토타입(Prototype)
UserDefineObject.prototype = {
	method1: function() {...},
	method2: function() {...},
}

// 인스턴스 생성(프로토타입 객체에 연결)
var udoA = new UserDefineObject;
var udoB = new UserDefineObject;
var udoC = new UserDefineObject;
```

```js
// 생성자(Contructor)
var SlideMenu = function(el_selector) {
	this.el = document.querySelector(el_selector);
};

// 프로토타입(Prototype)
SlideMenu.prototype = {
	open: function() {...},
	close: function() {...},
}

// 인스턴스 생성(프로토타입 객체에 연결)
var header_slide = new SlideMenu('header .slide');
var aside_slide = new SlideMenu('aside .slide');
var footer_slide = new SlideMenu('footer .slide');

// 각 인스턴스 객체의 메소드 실행
header_slide.open();
header_slide.close();

aside_slide.open();
aside_slide.close();

footer_slide.open();
footer_slide.close();
```