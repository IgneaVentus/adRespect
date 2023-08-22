window.onload = () => {
	awakeMasonry();
}

function awakeMasonry () {
	var elem = document.querySelector(".grid");
	var msnry = new Masonry( elem, {
		// options
		itemSelector: ".grid-item",
		gutter: ".gutter-sizer",
		fitWidth: true,
		percentPosition: true
	});
}