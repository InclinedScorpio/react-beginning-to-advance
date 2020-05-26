import React, { Component } from "react";
import appStyle from "./App.module.css";

//components
import Person from "./Person/Person";
import { red } from "color-name";

class App extends Component {
	state = {
		//directly state no let, var !! (they are mentioned in function)
		persons: [
			{ id: "1", name: "Ashutosh", age: 23 },
			{ id: "2", name: "Kilo", age: 45 },
			{ id: "3", name: "Mario", age: 80 }
		],
		more: "Anything here !",
		showPersons: false
	};

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
		//pehle id se index chaiye
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

	render() {
		let buttonClasses = [];

		let person = null;
		if (this.state.showPersons) {
			person = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<div key={person.id}>
								<Person
									name={person.name}
									age={person.age}
									click={() => {
										this.buttonClickHandler("Mario");
									}}
									changeName={event => {
										this.changePersonName(event, person.id);
									}}
									deleteme={() => {
										this.deletePerson(index);
									}}
								/>
							</div>
						);
					})}
				</div>
			);
			buttonClasses.push(appStyle.Red);
		}
		let h4classes = [];
		if (this.state.persons.length <= 2) {
			h4classes.push(appStyle.bold);
		}
		if (this.state.persons.length <= 1) {
			h4classes.push(appStyle.undeline);
		}

		return (
			<div className={appStyle.App}>
				<h4 className={h4classes.join(" ")}>Ashutosh Tiwari in</h4>
				<button
					className={buttonClasses.join(" ")}
					onClick={this.buttonClickHandler.bind(this, "Changed")}
				>
					{" "}
					HERE{" "}
				</button>
				{person}
			</div>
		);
	}
}

export default App;
