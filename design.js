//name = "[mainsize]|[padding]|[border]|[margin]|[text style]"
//mainsize = [Mode]/[width]/[height]
//padding = [Mode]/[top]/[right]/[bottom]/[left]
//border = [Mode]/[top]/[right]/[bottom]/[left]
//margin = [Mode]/[top]/[right]/[bottom]/[left]
// text style = [size]/[bold]

function style() {
	console.log("starting style()");
	var reswidth = document.body.clientWidth;
	var resheight = screen.height;
	console.log("screen width: " + reswidth + "px, height: " + resheight + "px");
	var name, array;
	var elements = document.getElementsByClassName('scalable');
	for (var i = 0; i < elements.length; i++) {
		name = elements[i].attributes.name.value;
		array = name.split("|");
		var mainsize = array[0];
		var padding = array [1];
		var border = array[2];
		var margin = array[3];
		var text = array[4];
		if (mainsize.length > 1) {
			var s_mainsize = mainsize.split("/");
			var s_mainsize_m = s_mainsize[0];
			var s_mainsize_w = s_mainsize[1];
			var s_mainsize_h = s_mainsize[2];
			if (s_mainsize_m == 1) {
				elements[i].style.width = resheight / 100 * s_mainsize_w + "px";
				elements[i].style.height = resheight / 100 * s_mainsize_h + "px";
			} else if (mode == 2) {
					elements[i].style.width = reswidth / 100 * s_mainsize_w + "px";
					elements[i].style.height = resheight / 100 * s_mainsize_h + "px";
			} else {
				elements[i].style.width = reswidth / 100 * s_mainsize_w + "px";
				elements[i].style.height = reswidth / 100 * s_mainsize_h + "px";
			}
		}
		if (padding.length > 1) {
			var s_padding = padding.split("/");
			var s_padding_m = s_padding[0];
			var s_padding_t = s_padding[1];
			var s_padding_r = s_padding[2];
			var s_padding_b = s_padding[3];
			var s_padding_l = s_padding[4];
			if (s_padding_m == 1) {
				elements[i].style.paddingTop = resheight / 100 * s_padding_t + "px";
				elements[i].style.paddingRight = resheight / 100 * s_padding_r + "px";
				elements[i].style.paddingBottom = resheight / 100 * s_padding_b + "px";
				elements[i].style.paddingLeft = resheight / 100 * s_padding_l + "px";
			} else if (s_padding_m == 2) {
				elements[i].style.paddingTop = reswidth / 100 * s_padding_t + "px";
				elements[i].style.paddingRight = resheight / 100 * s_padding_r + "px";
				elements[i].style.paddingBottom = reswidth / 100 * s_padding_b + "px";
				elements[i].style.paddingLeft = resheight / 100 * s_padding_l + "px";
			} else {
				elements[i].style.paddingTop = reswidth / 100 * s_padding_t + "px";
				elements[i].style.paddingRight = reswidth / 100 * s_padding_r + "px";
				elements[i].style.paddingBottom = reswidth / 100 * s_padding_b + "px";
				elements[i].style.paddingLeft = reshwidth / 100 * s_padding_l + "px";
			}
		}
		if (border.length > 1) {
			var s_border = border.split("/");
			var s_border_m = s_border[0];
			var s_border_t = s_border[1];
			var s_border_r = s_border[2];
			var s_border_b = s_border[3];
			var s_border_l = s_border[4];
			if (s_border_m == 1) {
				elements[i].style.borderTop = resheight / 100 * s_border_t + "px";
				elements[i].style.borderRight = resheight / 100 * s_border_r + "px";
				elements[i].style.borderBottom = resheight / 100 * s_border_b + "px";
				elements[i].style.borderLeft = resheight / 100 * s_border_l + "px";
			} else if (s_border_m == 2) {
				elements[i].style.borderTop = reswidth / 100 * s_border_t + "px";
				elements[i].style.borderRight = resheight / 100 * s_border_r + "px";
				elements[i].style.borderBottom = reswidth / 100 * s_border_b + "px";
				elements[i].style.borderLeft = resheight / 100 * s_border_l + "px";
			} else {
				elements[i].style.borderTop = reswidth / 100 * s_border_t + "px";
				elements[i].style.borderRight = reswidth / 100 * s_border_r + "px";
				elements[i].style.borderBottom = reswidth / 100 * s_border_b + "px";
				elements[i].style.borderLeft = reshwidth / 100 * s_border_l + "px";
			}
		}
		if (margin.length > 1) {
			var s_margin = margin.split("/");
			var s_margin_m = s_margin[0];
			var s_margin_t = s_margin[1];
			var s_margin_r = s_margin[2];
			var s_margin_b = s_margin[3];
			var s_margin_l = s_margin[4];
			if (s_margin_m == 1) {
				elements[i].style.marginTop = resheight / 100 * s_margin_t + "px";
				elements[i].style.marginRight = resheight / 100 * s_margin_r + "px";
				elements[i].style.marginBottom = resheight / 100 * s_margin_b + "px";
				elements[i].style.marginLeft = resheight / 100 * s_margin_l + "px";
			} else if (s_margin_m == 2) {
				elements[i].style.marginTop = reswidth / 100 * s_margin_t + "px";
				elements[i].style.marginRight = resheight / 100 * s_margin_r + "px";
				elements[i].style.marginBottom = reswidth / 100 * s_margin_b + "px";
				elements[i].style.marginLeft = resheight / 100 * s_margin_l + "px";
			} else {
				elements[i].style.marginTop = reswidth / 100 * s_margin_t + "px";
				elements[i].style.marginRight = reswidth / 100 * s_margin_r + "px";
				elements[i].style.marginBottom = reswidth / 100 * s_margin_b + "px";
				elements[i].style.marginLeft = reshwidth / 100 * s_margin_l + "px";
			}
		}
		// IDEA: Scale the textsize with the width or height!
		if (text.length > 1) {
			var s_text = text.split("/");
			var s_text_s = s_text[0];
			var s_text_b = s_text[1];
			elements[i].style.size =
		}
	}
}

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
