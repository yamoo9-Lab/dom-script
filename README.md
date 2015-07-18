## 수업 진행 내용 정리
- [1일차 내용 정리](_DOC_/D1.md)
- [2일차 내용 정리](_DOC_/D2.md)

---

### `switch ~ case ~ break` 문과 `try ~ catch(e)`문

```js
function selector(ex) {

	try {
		var list     = document.querySelectorAll(ex),
			list_len = list.length;
		switch(list_len) {
			case 0:
				return null;
			break;
			case 1:
				return list[0];
			break;
		}
		return list;
	}
	catch(e) {
		console.error(e.message);
	}

}
```