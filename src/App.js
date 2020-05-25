import React, { Component } from "react";
import "./App.css";

//components
import Person from "./Person/Person";

class App extends Component {
	state = {
		//directly state no let, var !! (they are mentioned in function)
		persons: [
			{ name: "Ashutosh", age: 23 },
			{ name: "Kilo", age: 45 },
			{ name: "Mario", age: 80 }
		],
		more: "Anything here !"
	};

	buttonClickHandler = name => {
		this.setState({
			persons: [
				{ name: name, age: 29 },
				{ name: "Kilo", age: 45 },
				{ name: "Mario", age: 80 }
			]
		});
	};

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
