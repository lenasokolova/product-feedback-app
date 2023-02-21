export const signInErrorHandle = (error) => {
	if (error.code == "auth/user-not-found") {
		const errorMsg =
			"User not found, try another email or sign up with new email";
		return errorMsg;
	} else if (error.code == "auth/wrong-password") {
		const errorMsg = "Invalid password";
		return errorMsg;
	} else {
		return;
	}
};

export const signUpErrorHandle = (error, email) => {
	if (error.code == "auth/email-already-in-use") {
		const errorMsg = `Email ${email} already in use, try to sign in`;
		return errorMsg;
	} else {
		return;
	}
};
