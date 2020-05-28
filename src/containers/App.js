import React, { Component } from "react";
import appStyle from "./App.module.css";

//components
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import { throwStatement } from "@babel/types";
import AuthContext from "../context/auth-context";

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
			showPersons: false,
			showHeading: true,
			counterValue: 0,
			isAuthenticated: false
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

		this.setState((prevState, props) => {
			return {
				persons: get_array,
				counterValue: prevState.counterValue + 1
			};
		});
	};

	authenticationHandler = () => {
		this.setState({
			isAuthenticated: true
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
				<p>{this.state.counterValue}</p>
				<button
					onClick={() => {
						this.setState({
							showHeading: !this.state.showHeading
						});
					}}
				>
					Close Heading
				</button>
				<AuthContext.Provider
					value={{
						isAuthenticated: this.state.isAuthenticated,
						authenticate: this.authenticationHandler
					}}
				>
					{this.state.showHeading && (
						<Cockpit
							showPersons={this.state.showPersons}
							persons={this.state.persons.length}
							clicked={this.buttonClickHandler}
						/>
					)}
					{person}
				</AuthContext.Provider>
			</div>
		);
	}
}

export default App;
