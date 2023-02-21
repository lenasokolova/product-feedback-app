import { useState } from "react";

import { useDispatch } from "react-redux";
import { addFeedback } from "../../redux/actions";
import { Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const useCreateNewFeedbackPage = () => {
	const [user] = useAuthState(auth);

	const initialState = {
		createdBy: user?.displayName,
		category: "All",
		comments: [],
		detail: "",
		id: nanoid(),
		createdAt: Timestamp.now().toDate(),
		status: "Suggestion",
		title: "",
		upVotesCount: [],
	};

	const [state, setState] = useState(initialState);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addFeedback(state));
		setState({ ...state, title: "", detail: "", category: "No category" });
		navigate("/");
	};

	const cancelAddFeedback = () => {
		navigate("/");
	};

	return { ...state, handleInputChange, handleSubmit, cancelAddFeedback };
};

export default useCreateNewFeedbackPage;
