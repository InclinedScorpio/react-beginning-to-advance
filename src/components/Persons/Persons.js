import React, { Component } from "react";

//components
import Person from "./Person/Person";

class Persons extends Component {
	static getDerivedStateFromProps(props, state) {
		console.log("Inside [Persons.js] getDerivedStateFromProps", props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("[Persons.js] shouldComponentUpdate");

		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("[Persons.js] getSnapshotBeforeUpdate");

		return { message: "Location is 9933" };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("[Persons.js] ComponentDidUpdate|Message received:", snapshot);
	}

	render() {
		return this.props.persons.map((person, index) => {
			return (
				<div key={person.id}>
					<Person
						name={person.name}
						age={person.age}
						click={() => {
							this.props.clicked();
						}}
						changeName={event => {
							this.props.changed(event, person.id);
						}}
						deleteme={() => {
							this.props.deleted(index);
						}}
					/>
				</div>
			);
		});
	}
}

export default Persons;
