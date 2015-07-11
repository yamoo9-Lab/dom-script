## 수업 진행 내용 정리
- [1일차 내용 정리](_DOC_/D1.md)

---

돔스크립트란?

문서에서 제어하고자 하는 객체를 찾아서 조작하는 것을 말한다.

뭐를 제어할건데?
문서 대상 객체

조작을 언제할건데?
이벤트

뭘 할건데?
핸들러 (함수: 어떤 일을 실행)


자바스크립트 문장

var 변수;

변수 = 값;

특정 조건 내에서 뭔가를 행하고 싶다.
if ( 조건 ) {
	참이면 실행되는 코드
} else {
	거짓이면 실행되는 코드
}

조건이 2개 이상이면...
if ( 조건1 ) {
	참이면 실행되는 코드
} else if ( 조건2 ) {
	참이면 실행되는 코드
} else {
	거짓이면 실행되는 코드
}

반복적으로 뭔가를 처리하고 싶을 때

var 조건 = 초기 값;

while(조건) {
	참일 경우 반복 실행
	조건을 변경해주는 것이 반드시 설정
}

조건이 거짓이더라도 반드시 1회는 실행하고 싶을 때

var 조건 = 초기 값;

do {
	조건과 상관 없이 1회는 반드시 실행
	그 이후에 참일 경우 반복 실행
	조건을 변경해주는 것이 반드시 설정
} while(조건);


for문은?

for(초기값; 조건확인; 값 변화) {
	참일 경우 반복 실행
}