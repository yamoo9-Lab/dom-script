/**
 * DATA
 * --------------------------------
 */
var images = [
	{
		'path': 'http://lorempixel.com/200/140/cats/1/',
		'desc': '고양이 1',
		'title': '냐옹이 1'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/2/',
		'desc': '고양이 2',
		'title': '냐옹이 2'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/3/',
		'desc': '고양이 3',
		'title': '냐옹이 3'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/4/',
		'desc': '고양이 4',
		'title': '냐옹이 4'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/5/',
		'desc': '고양이 5',
		'title': '냐옹이 5'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/6/',
		'desc': '고양이 6',
		'title': '냐옹이 6'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/7/',
		'desc': '고양이 7',
		'title': '냐옹이 7'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/8/',
		'desc': '고양이 8',
		'title': '냐옹이 8'
	},
	{
		'path': 'http://lorempixel.com/200/140/cats/9/',
		'desc': '고양이 9',
		'title': '냐옹이 9'
	},
];

/**
 * 대상(요소노드) 대입(할당), 참조(레퍼런스)
 * --------------------------------
 */
var covers = document.querySelector('.covers'),
	button = document.querySelector('button');

/**
 * 함수(모듈화)
 * --------------------------------
 */

/**
 * loadData() 함수 - 데이터를 불러오는 함수
 * @param  {Object} data   데이터 객체 (필수!)
 * @param  {ElementNode} target 데이터를 뿌릴 부모 요소노드 (필수!)
 * @param  {Number} count  불러올 데이터의 개수
 * @param  {Number} start  불러올 데이터의 시작 숫자
 * @return {undefined}
 */
function loadData(data, target, count, start) {
	// 유효성 검사
	if (!(data instanceof Array)) {
		throw new Error('데이터의 유형은 객체여야만 합니다.');
	}
	if (!target || !target.nodeName) {
		throw new Error('불러온 이미지를 추가할 부모 요소를 설정해야 합니다.');
	}

	// 초기값 설정
	start = (start-1<0?0:start-1) || 0;
	count = ( ((start+count)>data.length) ? data.length : (start+count) ) || data.length;

	// 템플릿
	var template = '';
	for(var i=start, l=count; i<l; i++) {
		template += '<figure class="cover">';
		template += 	'<img src="'+ data[i].path +'" width="200" height="140" alt title="'+ data[i].title +'" class="cover-img">';
		template += 	'<figcaption class="cover-desc"> '+ data[i].desc +' </figcaption>';
		template += '</figure>';
	}

	// 템플릿 완성 코드 target 요소에 붙이기
	target.innerHTML += template;
}




/**
 * 화면 제일 끝에 스크롤 되는 시점을 감지
 * 스크롤 위치 : window.scrollY
 * 화면의 세로 폭 : document.body.clientHeight
 * document.body.clientHeight - window.innerHeight
 * --------------------------------
 */

var body = document.body;



window.onscroll = function() {
	var target_point = this.scrollY + this.innerHeight;
	// console.log(body.clientHeight, target_point);
	if (document.height === target_point) {
		// console.log('맨 끝');
		// loadData(images, covers);
	}
}


/**
 * Button 이벤트 핸들링
 * --------------------------------
 */
var num = 1;
button.onclick = function() {
	loadData(images, covers, 3, num);
	num += 3;
};