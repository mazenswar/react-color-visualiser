import React, { useState } from "react";
import Controls from "./controls/Controls";
import { rgb2hex, cssPath } from "./util/helpers";
import "./style.scss";

export default function ReactColorVisualiser({ children }) {
	const [selected, setSelected] = useState("");

	function handleClick(e) {
		e.preventDefault();
		const style = window.getComputedStyle(e.target);
		const { backgroundColor, color, fontSize, background } = style;

		const data = {
			nodeName: e.target.tagName,
			classList: e.target.classList,
			cssPath: cssPath(e.target),
			background,
			backgroundColor: rgb2hex(backgroundColor),
			color: rgb2hex(color),
			id: e.target.id,
			fontSize,
		};
		setSelected(data);
	}

	return (
		<main id="rcv-main">
			<Controls selected={selected} setSelected={setSelected} />
			<section id="rcv-display" onClick={handleClick}>
				{children}
			</section>
		</main>
	);
}
