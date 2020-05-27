import React, { Component } from "react";
import stylePerson from "./Person.module.css";

class Person extends Component {
	render() {
		return (
			<div className={stylePerson.Person}>
				<p onClick={this.props.deleteme}>
					Hello, I am {this.props.name}, I am {this.props.age} year's old.
				</p>
				<input onChange={this.props.changeName} value={this.props.name} />
			</div>
		);
	}
}

export default Person;
