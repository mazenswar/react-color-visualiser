import React from "react";
import { copyTextToClipboard } from "../util/helpers";

function CustomColorPicker({ userColors }) {
	if (userColors.length < 1) {
		return;
	}
	return (
		<div id="custom-color-picker">
			<h2>Imported Colors</h2>
			<span>Click the color to copy</span>
			{userColors.map((c) => (
				<div className="custom-color" key={c.value}>
					<h3>{c.name.replace("--", "")}</h3>
					<div
						onClick={(e) => copyTextToClipboard(c.value)}
						style={{
							cursor: "pointer",
							width: "100px",
							height: "100px",
							backgroundColor: c.value,
						}}
					></div>
				</div>
			))}
		</div>
	);
}

export default CustomColorPicker;
