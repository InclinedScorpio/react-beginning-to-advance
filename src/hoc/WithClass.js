import React from "react";

const withClass = (WrappedComponent, classes) => {
	return props => (
		<div>
			{console.log("123455", { ...props })}
			<WrappedComponent {...props} />
		</div>
	);
};

export default withClass;
