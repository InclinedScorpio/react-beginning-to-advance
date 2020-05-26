import React from "react";
import stylePerson from "./Person.module.css";

const Person = props => {
	return (
		<div className={stylePerson.Person}>
			<p onClick={props.deleteme}>
				Hello, I am {props.name}, I am {props.age} year's old.
			</p>
			<input onChange={props.changeName} value={props.name} />
		</div>
	);
};

export default Person;
