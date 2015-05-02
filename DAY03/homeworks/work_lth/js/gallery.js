var body = document.body;
// var bodyImg = body.getAttribute('background');

var thumbnails = document.querySelectorAll('.gallery-item'); // img

// var showBox = document.querySelector('.show-box');
// var showBoxPath = showBox.getAttribute('src');

// thumbnails[0].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[1].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[2].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[3].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[4].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[5].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[6].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[7].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[8].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }
// thumbnails[9].onclick = function() {
// 	// console.log(this.src)
// 	body.style.background = 'url('+this.src+') top left /cover no-repeat'
// 	return false;
// }

var thumbnailsCount = thumbnails.length;

// console.log(thumbnailsCount);

while (thumbnailsCount > 0) {
	thumbnailsCount--;
	// console.log(thumbnails[thumbnailsCount].parentNode);
	thumbnails[thumbnailsCount].parentNode.onclick = changeBG;
	// console.log(thumbnailsCount);
}

function changeBG() {
	var src = this.querySelector('img').getAttribute('src');
	body.style.background = 'url(' + src + ') top left /cover no-repeat';
	return false;
}
