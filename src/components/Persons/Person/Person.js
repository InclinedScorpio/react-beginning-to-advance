import React, { useEffect } from "react";
import stylePerson from "./Person.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";

const Person = props => {
	console.log("Props are ", props);
	useEffect(() => {
		console.log("Use Effect 1 ****************");

		return () => {
			console.log("Cleanup [] 1 &&&&&&&&&&&&");
		};
	}, [props.name]);

	return (
		<Auxiliary>
			<p onClick={props.deleteme}>
				Hello, I am {props.name}, I am {props.age} year's old.
			</p>
			<input onChange={props.changeName} value={props.name} />
		</Auxiliary>
	);
};

//propTypes in components if added, React will take care of that.
Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	changeName: PropTypes.func,
	deleteme: PropTypes.func
};

export default withClass(Person, stylePerson.Person);
