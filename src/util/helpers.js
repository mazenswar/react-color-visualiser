//Most browsers seem to return the RGB value
//Function to Convert RGB to Hex Code
export function rgb2hex(rgb) {
	let rgbArr = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	if (rgbArr) {
		return "#" + hex(rgbArr[1]) + hex(rgbArr[2]) + hex(rgbArr[3]);
	}
	return "";
}

export async function copyTextToClipboard(text) {
	const str = JSON.stringify(text);
	if ("clipboard" in navigator) {
		try {
			await navigator.clipboard.writeText(str);
		} catch (error) {
			console.log(error);
		}
	} else {
		return document.execCommand("copy", true, str);
	}
}

export function cssPath(el) {
	if (!(el instanceof Element)) return;
	var path = [];
	while (el.nodeType === Node.ELEMENT_NODE) {
		var selector = el.nodeName.toLowerCase();
		if (el.id) {
			selector += "#" + el.id;
			path.unshift(selector);
			break;
		} else {
			var sib = el,
				nth = 1;
			while ((sib = sib.previousElementSibling)) {
				if (sib.nodeName.toLowerCase() == selector) nth++;
			}
			if (nth != 1) selector += ":nth-of-type(" + nth + ")";
		}
		path.unshift(selector);
		el = el.parentNode;
	}
	return path.join(" > ");
}
