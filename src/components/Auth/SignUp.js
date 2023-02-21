import React, { useState } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import routes from "../../routes/routes";
import { Form, Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import { signUpSchema } from "./signUpSchema";
import { FormContainerDiv, FormDiv, FormTitle } from "./Auth.styles";
import { signUpErrorHandle } from "../../helpers/errorHandling";
import { ErrorMessage } from "./ErrorMessage";

const SignUp = () => {
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async (values) => {
		try {
			await createUserWithEmailAndPassword(auth, values.email, values.password);
			updateProfile(auth.currentUser, {
				displayName: values.fullName,
			});
			navigate(routes.REACT_APP_DASHBOARD_PATH);
		} catch (error) {
			const message = signUpErrorHandle(error, values.email);
			setErrorMsg(message);
		}
	};

	return (
		<FormContainerDiv>
			<FormTitle>
				<AssistantIcon />
				<h1>Register to app</h1>
			</FormTitle>
			{errorMsg && <ErrorMessage message={errorMsg} />}

			<Formik
				initialValues={{
					fullName: "",
					email: "",
					password: "",
					confirmPass: "",
				}}
				validationSchema={signUpSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						handleSignUp(values);
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form>
					<FormDiv>
						<CustomInput
							label="Full Name"
							name="fullName"
							type="text"
							placeholder="Jane Doe"
						/>
						<CustomInput
							label="Email"
							name="email"
							type="email"
							placeholder="example@email.com"
						/>
						<CustomInput
							label="Password"
							name="password"
							type="password"
							placeholder="***********"
						/>
						<CustomInput
							label="Confirm Password"
							name="confirmPass"
							type="password"
							placeholder="***********"
						/>
						<CustomBtn
							type="submit"
							title="Submit"
						/>
					</FormDiv>
				</Form>
			</Formik>
			<p>Have an account?</p>
			<a href={routes.REACT_APP_LOGIN_PATH}>
				<h3>Go to Login Page</h3>
			</a>
		</FormContainerDiv>
	);
};

export default SignUp;
