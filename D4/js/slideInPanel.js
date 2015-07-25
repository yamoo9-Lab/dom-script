var app_menu        = $('#app-menu'),
	app_menu_handle = find(app_menu, '.slide-handle a'),
	app_menu_panel  = find(app_menu, '.slide-panel');

app_menu_handle.onclick = function() {
	// app_menu.classList.toggle('on');
	toggleClass(app_menu, 'on');
	return false;
}