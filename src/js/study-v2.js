window.onload = function() {

var div = document.getElementsByTagName('div');
div[0].onclick = function() {
	console.log(this.innerText);
}
}