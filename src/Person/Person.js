import React from "react";
import "./Person.css";
import Radium from "radium";

const Person = props => {
	let style = {
		":hover": {
			backgroundColor: "yellow",
			color: "black"
		},
		"@media(min-width : 500px)": {
			width: "100px"
		}
	};
	return (
		<div className="Person" style={style}>
			<p className="content" onClick={props.deleteme}>
				Hello, I am {props.name}, I am {props.age} year's old.
			</p>
			<input onChange={props.changeName} value={props.name} />
		</div>
	);
};

export default Radium(Person);
