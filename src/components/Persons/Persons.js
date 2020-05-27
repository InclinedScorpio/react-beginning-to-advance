import React from "react";

//components
import Person from "./Person/Person";

const Persons = props => {
	console.log("Inside Person ");
	return props.persons.map((person, index) => {
		return (
			<div key={person.id}>
				<Person
					name={person.name}
					age={person.age}
					click={() => {
						props.clicked();
					}}
					changeName={event => {
						props.changed(event, person.id);
					}}
					deleteme={() => {
						props.deleted(index);
					}}
				/>
			</div>
		);
	});
};

export default Persons;
