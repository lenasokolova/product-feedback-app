import * as Yup from "yup";

export const signInSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.min(4, "Must be 4 characters or more")
		.max(15, "Must be 15 characters or less")
		.required("Password is required"),
});
