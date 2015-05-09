/*! JS Core Syntax © yamoo9.net, 2015.5.9 */

/**
 * 자바스크립트 데이터 유형 - 6가지 (객체(Object)를 상속한 데이터)
 * 숫자 (Number)
 * 문자 (String)
 * 논리 (Boolean)
 * 함수 (Function)
 * 배열 (Array)
 * 객체 (Object)
 *
 * 자바스크립트 데이터 체크(확인) - typeof
 * typeof {data}
 * 'number', 'string', 'boolean', 'function', 'object' 출력
 * ※ 배열(Array)의 경우, typeof로 체크할 수 없습니다.
 *
 * 자바스크립트 유형 변환
 * 숫자 → 문자
 * ({숫자}).toString(), '{숫자}', {숫자}+'', String({숫자})
 * 문자(숫자형) → 숫자
 * {숫자형 문자}+0, {숫자형 문자}*1, {숫자형 문자}/1
 * Number({숫자형 문자})
 * parseInt({숫자형 문자})
 * parseFloat({숫자형 문자})
 * 논리(불린) 변환
 * !!{데이터} ==> 불린 값으로 변경
 *
 *
 *
 * 배열, 객체는 복합 데이터!!!
 * 어떤 일련의 정보들을 담아 놓습니다.
 * 그것을 호출해서 재사용....
 *
 */

var num, str, boo, arr, fn, obj;

// 리터럴(값) 표기식
num = 9;
str = '야무9';
boo = true;
arr = [num, str, boo];
fn  = function() {};
obj = {};

// var num = new Number(9); // 9
// var str = new String('야무9');
// var boo = new Boolean(true);
// var arr = new Array(num, str, boo); // [9, '야무9', true]
// var fn = new Function();
// var obj = new Object();

// 여러분에게 배열이란?
// length
// [] 배열 값(리터럴)

var myClassMember1 = '정서현';
var myClassMember2 = '이태호';
var myClassMember3 = '이종환';

var myClassMembers = new Array; // 빈 배열 데이터 참조

myClassMembers.push('정서현');
myClassMembers.push('이태호');
myClassMembers.push('김예리');
myClassMembers.push('이종환');
myClassMembers.push('박희진');

// myClassMembers[0] = '정서현'; // 배열에 원소(아이템) 추가
// myClassMembers[1] = '이태호'; // 배열에 원소(아이템) 추가
// myClassMembers[2] = '이종환'; // 배열에 원소(아이템) 추가
// myClassMembers[3] = '김예리'; // 배열에 원소(아이템) 추가
// myClassMembers[4] = '박희진'; // 배열에 원소(아이템) 추가

console.log(myClassMembers); // ['정서현','이태호','이종환','김예리']

