// #app header
var header = selector('#app header');
// console.log(header);

header.onmouseenter = function() {
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
}

header.onmouseleave = function() {
    this.style.backgroundColor = '';
    this.style.color = '';
}

var footer_links = selector('footer a'); // ['a', 'a', 'a', 'a']

function footerLinkFn(e) {
    e.preventDefault();
};

function footerLinkMouseEnterFn() {
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
}

function footerLinkMouseLeaveFn() {
    this.style.backgroundColor = '';
    this.style.color = '';
}

for (var i=0, l=footer_links.length, footer_link; i < l; i++) {
	footer_link = footer_links[i];
    footer_link.onclick = footerLinkFn;
    footer_link.onmouseenter = footerLinkMouseEnterFn;
    footer_link.onmouseleave = footerLinkMouseLeaveFn;
}
