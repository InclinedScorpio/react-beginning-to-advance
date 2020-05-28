import React, { useEffect, memo } from "react";
import styleCockpit from "./Cockpit.module.css";

const Cockpit = props => {
	useEffect(() => {
		console.log("[Cockpit.js]");

		return () => {
			console.log("[Cockpit] Cleaning");
		};
	});

	let h4classes = [];
	if (props.persons <= 2) {
		h4classes.push(styleCockpit.bold);
	}
	if (props.persons <= 1) {
		h4classes.push(styleCockpit.undeline);
	}

	let buttonClasses = [];
	if (props.showPersons) {
		buttonClasses.push(styleCockpit.Red);
	}

	return (
		<div className={styleCockpit.Cockpit}>
			<h4 className={h4classes.join(" ")}>Ashutosh Tiwari</h4>
			<button
				className={buttonClasses.join(" ")}
				onClick={props.clicked.bind(this, "Changed")}
			>
				{" "}
				HERE{" "}
			</button>
		</div>
	);
};

export default memo(Cockpit);
