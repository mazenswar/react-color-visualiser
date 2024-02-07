import React from "react";

export default function Textarea({ userInput, handleChange, handleImport }) {
	return (
		<div className="import-container">
			<h1>Import Colors</h1>
			<textarea
				rows={25}
				onChange={handleChange}
				value={userInput}
				placeholder={
					"use a semicolon seperated list of css variables with hex values\n\n Example:\n\n --green: #13c10b; --red: #c10e09\n\n You can copy a color pallete you like from coolors.co and paste it here"
				}
			/>
			<button onClick={handleImport}>Import</button>
		</div>
	);
}
