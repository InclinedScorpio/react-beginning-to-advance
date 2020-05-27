import React, { Component } from "react";
import appStyle from "./App.module.css";

//components
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
	constructor(props) {
		console.log("Constructor in App.js", props);
		super(props);
		this.state = {
			persons: [
				{ id: "1", name: "Ashutosh", age: 23 },
				{ id: "2", name: "Kilo", age: 45 },
				{ id: "3", name: "Mario", age: 80 }
			],
			more: "Anything here !",
			showPersons: false
		};
	}

	static getDerivedStateFromProps = (props, state) => {
		console.log("Get derived state from props - App.js", props, state);
		return state;
	};

	componentDidMount() {
		console.log("Component did mount inside");
		//do everything here.
	}

	buttonClickHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons
		});
	};

	deletePerson = personIndex => {
		let persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({
			persons: persons
		});
	};

	changePersonName = (event, personIndex) => {
		let actualIndex = this.state.persons.findIndex(p => {
			return p.id == personIndex;
		});

		let actual_person = { ...this.state.persons[actualIndex] };

		let get_array = [...this.state.persons];
		get_array[actualIndex].name = event.target.value;
		get_array[actualIndex].age = actual_person.age;

		this.setState({
			persons: get_array
		});
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("[App.js]componentDidUpdate ");
	}

	render() {
		console.log("Render - App.js");
		let person = null;
		if (this.state.showPersons) {
			person = (
				<Persons
					persons={this.state.persons}
					clicked={this.buttonClickHandler}
					changed={this.changePersonName}
					deleted={this.deletePerson}
				/>
			);
		}

		return (
			<div className={appStyle.App}>
				<Cockpit
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.buttonClickHandler}
				/>
				{person}
			</div>
		);
	}
}

export default App;
