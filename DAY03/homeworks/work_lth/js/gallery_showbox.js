var imgChip = document.querySelectorAll('.gallery-item');
var imgChipList = imgChip.length;

var showBoxImg = document.getElementById('show-box');
var showBox = document.querySelector('section');

while (imgChipList > 0) {
	imgChipList--
	imgChip[imgChipList].onclick = gallery;
}
function gallery() {
	// showBoxImg.src = this.src;
	// showBoxImg.style.height = window.innerHeight + 'px';
	// showBoxImg.style.width = window.innerWidth + 'px';
	showBox.style.background = 'url(' + this.src +') center center no-repeat';
	showBox.style.height = window.innerHeight + 'px';
	showBox.style.width = window.innerWidth + 'px';
	
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