import React from "react";

const Person = props => {
	return (
		<div>
			<p onClick={props.click}>
				Hello, I am {props.name}, I am {props.age} year's old.
			</p>
			<p>{props.children}</p>
		</div>
	);
};

export default Person;
