import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteFeedbackInit, getSingleFeedback } from "../../redux/actions";
import routes from "../../routes/routes";
import { editFeedbackInit } from "./../../redux/actions";

const useEditFeedbackPage = () => {
	const params = useParams();
	const { id } = params;

	const { feedback } = useSelector((state) => state.data);
	const {
		category,
		detail,
		title,
		status,
		comments,
		upVotesCount,
		createdBy,
		createdAt,
	} = feedback;

	const initialState = {
		createdBy,
		category,
		comments,
		detail,
		createdAt,
		status,
		title,
		upVotesCount,
	};

	const [state, setState] = useState(initialState);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const cancelAddFeedback = () => {
		navigate(`${routes.REACT_APP_SINGLE_FEEDBACK_PATH}${id}`);
	};

	useEffect(() => {
		dispatch(getSingleFeedback(id));
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const editFeedback = async (e) => {
		e.preventDefault();

		dispatch(editFeedbackInit(id, state));

		setState({ ...state, title: "", detail: "", category: "All" });
		navigate(`/feedback/${id}`);
	};

	const deleteFeedback = async (id) => {
		dispatch(deleteFeedbackInit(id));
	};

	return {
		...state,
		deleteFeedback,
		editFeedback,
		handleInputChange,
		cancelAddFeedback,
	};
};

export default useEditFeedbackPage;
