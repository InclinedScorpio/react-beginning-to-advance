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

	let buttonClickHandler = () => {
		//WARNING :this will only keep person and remove rest all
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
