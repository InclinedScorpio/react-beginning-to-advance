import React, { Component } from "react";
import stylePerson from "./Person.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";

//components
import AuthContext from "../../../context/auth-context";

class Person extends Component {
	inputRef = React.createRef();
	componentDidMount() {
		//if want to do some other than pass a flag with 2nd & use if
		this.inputRef.current.focus();
	}

	static contextType = AuthContext;

	componentDidUpdate() {
		console.log("[Persons.js] Did Update");
		console.log(this.context);
	}

	render() {
		return (
			<Auxiliary>
				<p>{this.context.isAuthenticated ? "Logged in" : "Please log in"}</p>

				<p onClick={this.props.deleteme}>
					Hello, I am {this.props.name}, I am {this.props.age} year's old.
				</p>
				<input
					ref={this.inputRef}
					onChange={this.props.changeName}
					value={this.props.name}
				/>
			</Auxiliary>
		);
	}
}

//propTypes in components if added, React will take care of that.
Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	changeName: PropTypes.func,
	deleteme: PropTypes.func
};

export default withClass(Person, stylePerson.Person);
