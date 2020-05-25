import React, { useState } from "react";
import "./App.css";

//components
import Person from "./Person/Person";

const App = () => {
	//Use multiple use state rather than having single large usestate
	let [personState, setPersonState] = useState({
		persons: [
			{ name: "Ashutosh!", age: 32 },
			{ name: "Kilo", age: 45 },
			{ name: "Mario", age: 80 }
		]
	});

	let [otherState, setOtherState] = useState("This doesn't chage");

	buttonClickHandler = name => {
		this.setState({
			persons: [
				{ name: name, age: 29 },
				{ name: "Kilo", age: 45 },
				{ name: "Mario", age: 80 }
			]
		});
  }
  
	render() {
		return (
			<div className="App">
				<h1>Ashutosh Tiwari in</h1>
				<button onClick={this.buttonClickHandler.bind(this, "Ashutosh ")}>
					{" "}
					HERE{" "}
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					click={() => {
						this.buttonClickHandler("Mario");
					}}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={() => {
						this.buttonClickHandler("Delta");
					}}
				>
					{" "}
					My Hobbie is : Racing{" "}
				</Person>
			</div>
		);
	}
}

export default App;
