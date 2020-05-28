import React from "react";

const withClass = (WrappedComponent, classes) => {
	return props => (
		<div>
			<WrappedComponent {...props} />
		</div>
	);
};

export default withClass;
