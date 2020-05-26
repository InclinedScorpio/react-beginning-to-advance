import React from "react";
import "./Person.css";

const Person = props => {
	return (
		<div className="Person">
			<p className="content" onClick={props.deleteme}>
				Hello, I am {props.name}, I am {props.age} year's old.
			</p>
			<input onChange={props.changeName} value={props.name} />
		</div>
	);
};

export default Person;
