function afterpageload() {
	scale();
	console.log("page load is finish!");
	window.onresize = function (event) {
		scale();
	}
}
