(function(global, hw){

	var view = hw.view;

	var pagenation = view.pagenation;

	var pagenation_btns = pagenation.querySelectorAll('a');

	var container = document.querySelector('.hw-gallery-container');

	[].forEach.call(pagenation_btns, function(item, index) {
		item.setAttribute('data-index', index);
		item.onclick = function() {

			var distance_x = (this.getAttribute('data-index')-0) * (view.container_item_width * -3) + 'px';

			[].forEach.call(this.parentNode.children, function(item) {
				if( item.classList.contains('on') ) {
					item.classList.remove('on');
				}
			});

			this.classList.add('on');

			container.style.transform = 'translateX('+ distance_x +')';

			return false;
		}
	});

	var random = Math.floor( Math.random() * pagenation_btns.length );

	pagenation_btns[random].onclick();


})(window, window.hanwha);