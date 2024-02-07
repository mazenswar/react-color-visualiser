import React, { useState } from "react";

function useImportColors() {
	const [userColors, setUserColors] = useState([]);
	const [userInput, setUserInput] = useState("");

	/// EVENTS
	function handleTextChange(e) {
		setUserInput(e.target.value);
	}

	function handleImport() {
		const san = userInput.replace(/(\r\n|\n|\r)/gm, "");
		const colors = san
			.split(";")
			.filter((x) => x !== "")
			.map((c) => {
				let arr = c.split(": ");
				if (arr[0] == undefined || arr[1] == undefined) {
					return null;
				}
				return {
					name: arr[0],
					value: arr[1],
				};
			});
		if (colors.some((c) => c === null)) {
			alert("error");
			return;
		}
		setUserColors(colors);
		setUserInput("");
	}

	////////////////////////////// RETURN
	return {
		userColors,
		handleTextChange,
		userInput,
		handleImport,
	};
}

export default useImportColors;
