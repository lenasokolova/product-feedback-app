import React, { useState } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import routes from "../../routes/routes";
import { Form, Formik } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomBtn } from "../CustomBtn/CustomBtn";
import { signInSchema } from "./signInSchema";
import { FormContainerDiv, FormDiv, FormTitle } from "./Auth.styles";
import { signInErrorHandle } from "../../helpers/errorHandling";
import { ErrorMessage } from "./ErrorMessage";

const SignIn = () => {
	const [errorMsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	const handleSignIn = async (values) => {
		try {
			await signInWithEmailAndPassword(auth, values.email, values.password);
			navigate(routes.REACT_APP_DASHBOARD_PATH);
		} catch (error) {
			const message = signInErrorHandle(error);
			setErrorMsg(message);
		}
	};

	return (
		<FormContainerDiv>
			<FormTitle>
				<AssistantIcon />
				<h1>Login to app</h1>
			</FormTitle>
			{errorMsg && <ErrorMessage message={errorMsg} />}
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={signInSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						handleSignIn(values);
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form>
					<FormDiv>
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
						<CustomBtn
							type="submit"
							title="Submit"
						/>
					</FormDiv>
				</Form>
			</Formik>

			<p>Have not account yet?</p>
			<a href={routes.REACT_APP_REGISTER_PATH}>
				<h3>Go to Register Page</h3>
			</a>
		</FormContainerDiv>
	);
};

export default SignIn;
