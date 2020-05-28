import React from "react";

const withClass = (WrappedComponent, classes) => {
	return props => (
		<div>
			<WrappedComponent />
		</div>
	);
};

export default withClass;
