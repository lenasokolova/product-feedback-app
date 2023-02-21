import React from "react";
import Auth from "../../components/Auth/Auth";
import WelcomeImage from "../../components/WelcomeImage/WelcomeImage";
import { AuthPageDiv } from "./AuthPage.styles";

const RegisterPage = () => {
	return (
		<AuthPageDiv>
			<Auth />
			<WelcomeImage />
		</AuthPageDiv>
	);
};

export default RegisterPage;
