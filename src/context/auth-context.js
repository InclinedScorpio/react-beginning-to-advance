import React from "react";

const AuthContext = React.createContext({
	isAuthenticated: false,
	authenticate: () => {}
});

export default AuthContext;
