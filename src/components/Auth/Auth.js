import React from "react";
import SignUp from "./SignUp";
import { useLocation } from "react-router-dom";

import { AuthDiv } from "./Auth.styles";
import routes from "../../routes/routes";
import SignIn from "./SignIn";

const Auth = () => {
	let location = useLocation();

	return (
		<AuthDiv>
			{location.pathname === routes.REACT_APP_LOGIN_PATH && (
				<>
					<SignIn />
				</>
			)}
			{location.pathname === routes.REACT_APP_REGISTER_PATH && (
				<>
					<SignUp />
				</>
			)}
		</AuthDiv>
	);
};

export default Auth;
