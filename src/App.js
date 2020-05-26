import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

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
		let style = {};

		let classes = [];

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
		}

		if (this.state.persons.length <= 2) {
			classes.push("red");
		}
		if (this.state.persons.length <= 1) {
			classes.push("undeline");
		}

		return (
			<div className="App">
				<h4 className={classes.join(" ")}>Ashutosh Tiwari in</h4>
				<StyledButton
					onClick={this.buttonClickHandler.bind(this, "Changed")}
					alt={this.state.showPersons}
				>
					{" "}
					HERE{" "}
				</StyledButton>
				{person}
			</div>
		);
	}
}

export default App;

const StyledButton = styled.button`
	box-shadow: "1px 1px 1px grey";
	color: white;
	background-color: ${props => {
		return props.alt ? "red" : "green";
	}};
	&:hover {
		background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
		color: black;
	}
`;
