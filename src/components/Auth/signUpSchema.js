import * as Yup from "yup";

export const signUpSchema = Yup.object({
	fullName: Yup.string().required("Name is required!"),
	email: Yup.string()
		.required("Email is required")
		.matches(/\S+@\S+\.\S+/, "Incorrect email format"),
	password: Yup.string()
		.required("Password is required")
		.matches(
			/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/,
			"Needs to have a digit, a special character, small and big letter and be 8-10 char long"
		),
	confirmPass: Yup.string()
		.required("Confirm password field is required!")
		.oneOf([Yup.ref("password")], "Passwords do not match"),
});
