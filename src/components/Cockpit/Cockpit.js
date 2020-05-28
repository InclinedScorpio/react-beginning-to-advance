import React, { useEffect, memo, useContext } from "react";
import styleCockpit from "./Cockpit.module.css";

//components
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
	const buttonRef = React.useRef(null);

	const authContext = useContext(AuthContext);

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

			<button onClick={authContext.authenticate}>Log In</button>
		</div>
	);
};

export default memo(Cockpit);
