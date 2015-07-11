
window.onload = init;

function init() {

	var controls       = document.querySelector('#controls');
	var wallpages      = document.querySelector('#wallpages');
	var controls_btns  = controls.querySelectorAll('a');
	var wallpages_divs = wallpages.querySelectorAll('div');

	// 0, 1, 2, 3, 4 ,,,, n

	// var n = 0,
	// 	l = controls_btns.length;

	// while(n < l) {
	// 	var btn     = controls_btns[n];
	// 	btn.index   = n; // 버튼 인덱스 설정, 자신의 index 속성에다가 반복 순환되는 n 변수 값을 할당
	// 	btn.onclick = btnAction;
	// 	n++;
	// }

	for( var n = 0, l = controls_btns.length; n < l; n++ ) {
		var btn     = controls_btns[n];
		btn.index   = n; // 버튼 인덱스 설정, 자신의 index 속성에다가 반복 순환되는 n 변수 값을 할당
		btn.onclick = btnAction;
	}

	// controls_btns[0].onclick = btnAction;
	// controls_btns[1].onclick = btnAction;
	// controls_btns[2].onclick = btnAction;
	// controls_btns[3].onclick = btnAction;
}

function btnAction() {
	// console.log(this.index);
	var image_path = this.getAttribute('data-image-path');
	// var target = wallpages.querySelectorAll('div').item(this.index);
	var target     = wallpages.querySelectorAll('div')[this.index];
	target.style.backgroundImage = "url(" + image_path + ")";
	target.style.backgroundSize  = 'cover';
	return false;
}
