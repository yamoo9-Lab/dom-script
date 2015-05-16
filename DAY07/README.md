### Learning Javascript Core
- 객체(Object), 호이스트(Hoist), 영역(Scope)
- Javascript 클로져(Closure) [#](http://rhio.tistory.com/208)
- Javascript 가비지 컬렉션(Gabege Collection)
- 진보 이벤트 모델(Event Model) & 이벤트 위임(Delegation)
- 타임 컨트롤(Time Control)
	- `setInterval`
	- `setTimeout`
	- `clearInterval`
	- `clearTimeout`
	- `requestAnimationFrame` [#](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)
	- `cancelAnimationFrame` [#](https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame)
- 비동기통신(AJAX) & JSON
	AJAX 통신을 통해 읽어들일 수 있는 파일 포멧 [#](http://www.quirksmode.org/blog/archives/2005/12/the_ajax_respon.html)
	- Text File
	- HTML
	- XML
	- JSON
- ECMAScript v5 [#](http://kangax.github.io/compat-table/es5/)
	- `Object.prototype.create`
	- `String.prototype.trim`
	- `Array.prototype.forEach`
	- `Function.prototype.bind`

-

### IE 브라우저 Javascript 로컬 실행 시, 뜨는 ActiveX 창 문제 해결 [#](http://www.adobe.com/kr/support/flash/ts/documents/xpsp2.htm#active)

로컬에서 파일을 액세스할 때 ActiveX 컨트롤 또는 Javascript와 같은 액티브 콘텐트가 포함된 html 파일이 차단됩니다. 제작 미리 보기, 인쇄 등록, Flash Player 감지 기능 및 Flash의 예제 보기 기능이 영향을 받습니다.

Microsoft에서 제시한 해결 방법은 .html 파일에 해결 코드 한 줄을 삽입하는 것입니다. 이 코드를 삽입하면 파일이 로컬 컴퓨터 영역 대신 인터넷 영역으로 설정되어 로컬 컴퓨터 차단이 해제됩니다. Microsoft에서 **Mark of the Web**이라고 하는 이 코드는 다음과 같습니다.

```html
<!-- saved from url=(0013)about:internet -->
```