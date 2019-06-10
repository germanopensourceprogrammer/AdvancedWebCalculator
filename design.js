function scale() {
	console.log("starting scale()");
	var reswidth = document.body.clientWidth;
	var resheight = screen.height;
	console.log("screen width: " + reswidth + "px, height: " + resheight + "px");
	var name, array;
	var elements = document.getElementsByClassName('scalable');
	for (var i = 0; i < elements.length; i++) {
		console.log(elements);
		console.log(elements[i]);
		console.log(elements[i].attributes.name.value);
		name = elements[i].attributes.name.value;
		console.log(name);
		array = name.split("|");
		var mode = array[0];
		var scw = array[1];
		var sch = array[2];
		console.log(mode);
		if (mode == 1) {
			elements[i].style.width = resheight / 100 * scw + "px";
			elements[i].style.height = resheight / 100 * sch + "px";
		} else if (mode == 2) {
				elements[i].style.width = reswidth / 100 * scw + "px";
				elements[i].style.height = resheight / 100 * sch + "px";
		} else {
			elements[i].style.width = reswidth / 100 * scw + "px";
			elements[i].style.height = reswidth / 100 * sch + "px";
		}
	}
}
