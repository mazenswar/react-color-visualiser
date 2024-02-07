import React from "react";
import useImportColors from "./useImportColors";
import Textarea from "./Textarea";
import CustomColorPicker from "./CustomColorPicker";

function Controls({ selected, setSelected }) {
	const { handleTextChange, userInput, handleImport, userColors } =
		useImportColors();
	function handleChange(e) {
		const copy = { ...selected };
		copy[e.target.name] = e.target.value;
		setSelected(copy);
		document.querySelector(copy.cssPath).style[e.target.name] = e.target.value;
	}

	function handlePaste(e) {
		e.preventDefault();
		let paste = (e.clipboardData || window.clipboardData).getData("text");
		const sanitized = paste.replaceAll('"', "");
		const copy = { ...selected };
		copy[e.target.name] = sanitized;
		setSelected(copy);
		document.querySelector(copy.cssPath).style[e.target.name] = sanitized;
	}
	function renderSelected() {
		if (selected) {
			return (
				<>
					<div className="selected-data">
						<h1>Selected</h1>
						<h2>Node Name</h2>
						<span>{selected.nodeName}</span>
						<h2>ID</h2>
						<span>{selected.id || "none"}</span>
						<h2>Class List</h2>
						<span>
							{(selected.classList && Array(selected.classList).join(", ")) ||
								"none"}
						</span>
						<h2>CSS Path</h2>
						<span>{selected.cssPath}</span>
					</div>
					<div className="css-attr">
						<h1>Styles</h1>
						<label>
							Background
							<textarea
								type="text"
								value={selected.background}
								name="background"
								onChange={handleChange}
								onPaste={handlePaste}
								placeholder="idk"
							/>
						</label>
						<label>
							Background Color
							<input
								type="text"
								value={selected.backgroundColor}
								name="backgroundColor"
								onChange={handleChange}
								onPaste={handlePaste}
								placeholder="Enter 6 digit hex value"
							/>
						</label>
						<label>
							Text Color
							<input
								type="text"
								value={selected.color}
								name="color"
								onChange={handleChange}
								onPaste={handlePaste}
								placeholder="Enter 6 digit hex value"
							/>
						</label>
						<label>
							Font Size
							<input
								type="text"
								value={selected.fontSize}
								name="fontSize"
								onChange={handleChange}
								onPaste={handlePaste}
							/>
						</label>
					</div>
				</>
			);
		}
		return (
			<>
				<h2 id="rvc-ns">Nothing Selected</h2>
				<h4>Click anything in your app to select</h4>
			</>
		);
	}

	return (
		<div id="rcv-controls">
			<div id="rcv-selected">{renderSelected()}</div>
			<CustomColorPicker userColors={userColors} />
			<Textarea
				handleChange={handleTextChange}
				userInput={userInput}
				handleImport={handleImport}
			/>
		</div>
	);
}

export default Controls;
