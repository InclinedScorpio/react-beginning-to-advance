import React, { useState } from "react";
import "./App.css";

//components
import Person from "./Person/Person";

const App = () => {
	let [personState, setPersonState] = useState({
		persons: [
			{ name: "Ashutosh!", age: 32 },
			{ name: "Kilo", age: 45 },
			{ name: "Mario", age: 80 }
		]
	});

	let [otherState, setOtherState] = useState("This doesn't chage");

	let buttonClickHandler = () => {
		setPersonState({
			persons: [
				{ name: "Changed IT!", age: 29 },
				{ name: "Kilo", age: 45 },
				{ name: "Mario", age: 80 }
			]
		});
	};
	console.log(personState, otherState);
	return (
		<div className="App">
			<h1>Ashutosh Tiwari in</h1>
			<button onClick={buttonClickHandler}> HERE </button>
			<Person
				name={personState.persons[0].name}
				age={personState.persons[0].age}
			/>
			<Person
				name={personState.persons[1].name}
				age={personState.persons[1].age}
			>
				{" "}
				My Hobbie is : Racing{" "}
			</Person>
		</div>
	);
};

export default App;

// buttonClickHandler = () => {
// 	this.setState({
// 		persons: [
// 			{ name: "Changed IT!", age: 29 },
// 			{ name: "Kilo", age: 45 },
// 			{ name: "Mario", age: 80 }
// 		]
// 	});
//  };
