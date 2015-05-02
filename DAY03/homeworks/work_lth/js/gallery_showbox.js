var imgChip     = document.querySelectorAll('.gallery-item');
var imgChipList = imgChip.length;

var showBoxImg = document.getElementById('show-box');
var showBox    = document.querySelector('section');

while (imgChipList > 0) {
	imgChipList--
	imgChip[imgChipList].onclick = gallery;
}
function gallery() {
	// showBoxImg.src = this.src;
	// showBoxImg.style.height = window.innerHeight + 'px';
	// showBoxImg.style.width = window.innerWidth + 'px';
	showBox.style.backgroundImage = 'url(' + this.src +')';
	showBox.style.height = window.innerHeight + 'px';
	// showBox.style.width = window.innerWidth + 'px';
	// showBox.style.backgroundSize = 'cover';

	return false;
}

// while (imgChipList > 0) {
// 	imgChipList--
// 	imgChip[imgChipList].onclick = changeBG
// }

// function changeBG() {
// 	var showbox = document.getElementsByClassName('.show-box');
// 	showbox.style.background = 'url(' + this.src+' ) top left no-repeat';
// 	return false;
// }