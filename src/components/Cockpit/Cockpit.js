import React, { useEffect, memo } from "react";
import styleCockpit from "./Cockpit.module.css";

const Cockpit = props => {
	const buttonRef = React.useRef(null);

	useEffect(() => {
		console.log("[Cockpit.js]");

		return () => {
			console.log("[Cockpit] Cleaning");
		};
	});

	useEffect(() => {
		buttonRef.current.click();
	}, []);

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
				ref={buttonRef}
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
