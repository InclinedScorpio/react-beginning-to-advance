import React from "react";
import "./Person.css";
import styled from "styled-components";

const Person = props => {
	const StyledDiv = styled.div`
		color: red;
		width: 40%;
		margin: 3% auto;
		padding: 2%;
		border: 2px solid goldenrod;
		box-shadow: 1px 1px 1px slategray;
		&:hover {
			//& points to div here
			background-color: yellow;
		}
		@media (min-width: 800px) {
			width: 10%;
		}
	`;

	return (
		<StyledDiv>
			<p className="content" onClick={props.deleteme}>
				Hello, I am {props.name}, I am {props.age} year's old.
			</p>
			<input onChange={props.changeName} value={props.name} />
		</StyledDiv>
	);
};

export default Person;
