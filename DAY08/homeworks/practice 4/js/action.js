/**
 * 갤러리 만들기.
 * 2초 간격으로 자동 재생.
 * 마우스 클릭시 멈춤.
 * 재생/일시정지버튼 기능.
 * 로드시 처음엔 딤/레이어팝업 제어
 */

(function(global){

	var descs = [
		{
			'title': '히말라야',
			'para': '구름 사이로 눈 내린 산이 보인다.'
		},
		{
			'title': '오로라',
			'para': '오로라가 펼쳐진 풍경'
		}
	];



	var gallery    = document.querySelector('.gallery'),
		boxs       = gallery.querySelectorAll('a'),
		boxsCount  = boxs.length,
		showWindow = document.querySelector('.showWindow'),
		descLayer  = document.querySelector('.descLayer'),
		item;

	/**
	 * 2초 간격으로 자동 재생
	 * --------------------------------
	 */
	var time = 1; // 자동 애니메이션 시간
	var num = 3; // 초기값
	var autoRolling = true;
	var className = 'show';
	var rollingID;

	// 초기화 실행
	init(num, autoRolling);

	function changeImage(index, realClick) {
		if (realClick) { stopImages(); }
		var children = this.parentNode.parentNode.children;
		for (var i=0, l=children.length; i<l; i++) {
			var firstChild = children[i].firstElementChild;
			if (firstChild.classList.contains(className)) {
				firstChild.classList.remove(className);
			}
		}
		this.classList.add(className);
		var leadingZero = '';
		if ( index < 10 ) { leadingZero = '0'; }
		var path = 'url(images/' + (leadingZero + index) + '.jpg)';
		showWindow.setAttribute('style', 'background-image: '+path);
		return false;
	}

	function init(index, autoRolling) {


		for ( var i=0, l=boxsCount; i<l; i++) {
			var item = boxs[i];
			item.onclick = (function(i){
				var realClick = true;
				return changeImage.bind(item, i, realClick);
			})(i);
		}

		// show 클래스 속성 값을 첫번째 요소에 할당
		boxs[index].onclick();

		if (autoRolling) {
			playImages();
		}
	}

	function rollingImages() {
		return setInterval(function() {
			// 선택된(.show) 이미지의 다음 순서 이미지 활성화
			var index = num++%boxsCount;
			// console.log(index, boxs[index]);
			changeImage.call(boxs[index], index);
			// boxs[index].onclick();
		}, time * 1000);
	}

	function playImages() {
		rollingID = rollingImages();
	}

	function stopImages() {
		clearInterval(rollingID);
	}

	// global.playImages = playImages;
	// global.stopImages = stopImages;

})(window);