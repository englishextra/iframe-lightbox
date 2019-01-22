/*!
 * @see {@link http://docs.nwjs.io/en/latest/For%20Users/Getting%20Started/}
 * @see {@link http://docs.nwjs.io/en/latest/References/Window/#windowopenurl-options-callback}
 * icon must be PNG, not ICO
 */
nw.Window.open("index.html", {
	width: 844,
	height: 640,
	icon: "favicon-32x32.png",
	title: "img-lightbox Demo Page"
}, function (win) {});
