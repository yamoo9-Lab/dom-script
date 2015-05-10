
// Array
// 어떤 목적의 배열을 만들 것인가?
var images_path = [
	'http://lorempixel.com/200/140/cats/1/',
	'http://lorempixel.com/200/140/cats/2/',
	'http://lorempixel.com/200/140/cats/3/',
	'http://lorempixel.com/200/140/cats/4/',
	'http://lorempixel.com/200/140/cats/5/',
	'http://lorempixel.com/200/140/cats/6/',
	'http://lorempixel.com/200/140/cats/7/',
	'http://lorempixel.com/200/140/cats/8/',
	'http://lorempixel.com/200/140/cats/9/',
];

var images_desc = [
	'고양이 1',
	'고양이 2',
	'고양이 3',
	'고양이 4',
	'고양이 5',
	'고양이 6',
	'고양이 7',
	'고양이 8',
	'고양이 9',
];

// 대상(요소노드) 대입(할당), 참조(레퍼런스)
var covers = document.querySelector('.covers');
// var button = document.querySelector('button');
var button = document.getElementsByTagName('button')[0];


// images_path==images_desc== figure length가 같다. 공통의 변수를 만든다.
var lengths = images_path.length;

//button click시 figure가 하나씩 나온다.
var count = 0;

load_count = 3;

button.onclick = function() {
	for(var i=0; i<load_count; i++) {
		showImg();
	}
}

function showImg(){
	//image
	var new_img = document.createElement('img');
	new_img.setAttribute('src', images_path[count]);
	new_img.setAttribute('width', 200);
	new_img.setAttribute('height', 140);
	new_img.setAttribute('alt', '');
	new_img.setAttribute('title', 'cats');
	// new_img.setAttribute('class', 'cover-img');
	new_img.classList.add('cover-img');

	//figcaption
	var new_fig = document.createElement('figcaption');
	// new_fig.setAttribute('class', 'cover-desc');
	new_fig.classList.add('cover-desc');
	text(new_fig, images_desc[count]);

	//figure
	var figure = document.createElement('figure');
	// figure.setAttribute('class','cover');
	figure.classList.add('cover');

	//화면에 출력
	figure.appendChild(new_img);
	figure.appendChild(new_fig);
	covers.appendChild(figure);

	if( count < lengths-1 ){
		count++;
		console.log(count);
	} else {
		// 버튼 클릭 이벤트 제거
		button.onclick = null;
		button.setAttribute('disabled', 'disabled');
		// var txt = document.createTextNode('이미지가 없습니다.');
		// var div = document.createElement('div');
		// div.appendChild(txt);
		// covers.appendChild(div);
	}

}
