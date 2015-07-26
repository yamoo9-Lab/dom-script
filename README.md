## 수업 진행 내용 정리
- [1일차 내용 정리](_DOC_/D1.md)
- [2일차 내용 정리](_DOC_/D2.md)
- [3일차 내용 정리](_DOC_/D3.md)

---

### 전역(Global) vs 지역(Local)

함수 블록문(`{}`) 내부는 전역 공간과 구별되는 별도의 공간입니다.

```js
var global_variable = '전역 변수';

// 전역 함수
function globalFn() {

	var local_variable = '지역 변수';

	// 지역 함수
	function localFn() {

	}

}

if(true) {
	// if, switch 조건 블록문 내부는 별도의 공간으로 처리되지 않습니다.
}

var count = 0;
while(++count > 3) {
	// while, for문 반복 블록문 내부에서도 별도의 공간으로 처리되지 않습니다.
}
```
