import * as types from "./actionTypes";
import feedbackService from "../services/feedbackService";

// get feedbacks actions

const getFeedbacksStart = () => ({
	type: types.GET_FEEDBACKS_START,
});

const getFeedbacksSussess = (feedbacks) => ({
	type: types.GET_FEEDBACKS_SUCCESS,
	payload: feedbacks,
});

const getFeedbacksFail = () => ({
	type: types.GET_FEEDBACKS_FAIL,
});

// get ONE feedback actions

const getSingleFeedbackStart = () => ({
	type: types.GET_SINGLE_FEEDBACK_START,
});

const getSingleFeedbackSussess = (feedback) => ({
	type: types.GET_SINGLE_FEEDBACK_SUCCESS,
	payload: feedback,
});

const getSingleFeedbackFail = () => ({
	type: types.GET_SINGLE_FEEDBACK_FAIL,
});

// delete feedbacks actions

const deleteFeedbackStart = () => ({
	type: types.DELETE_FEEDBACK_START,
});

const deleteFeedbackSussess = () => ({
	type: types.DELETE_FEEDBACK_SUCCESS,
});

const deleteFeedbackFail = () => ({
	type: types.DELETE_FEEDBACK_FAIL,
});

// add feedbacks actions

const addFeedbackStart = () => ({
	type: types.ADD_FEEDBACK_START,
});

const addFeedbackSussess = () => ({
	type: types.ADD_FEEDBACK_SUCCESS,
});

const addFeedbackFail = () => ({
	type: types.ADD_FEEDBACK_FAIL,
});

// edit feedbacks actions

const editFeedbackStart = () => ({
	type: types.EDIT_FEEDBACK_START,
});

const editFeedbackSussess = () => ({
	type: types.EDIT_FEEDBACK_SUCCESS,
});

const editFeedbackFail = () => ({
	type: types.EDIT_FEEDBACK_FAIL,
});

// add comment to feedback actions

const addCommentToFeedbackStart = () => ({
	type: types.ADD_COMMENT_TO_FEEDBACK_START,
});

const addCommentToFeedbackSussess = () => ({
	type: types.ADD_COMMENT_TO_FEEDBACK_SUCCESS,
});

const addCommentToFeedbackFail = () => ({
	type: types.ADD_COMMENT_TO_FEEDBACK_FAIL,
});

export const getFeedbacks = (err) => {
	return async function (dispatch) {
		dispatch(getFeedbacksStart());

		const feedbacks = await feedbackService.getAllFeedbacks();
		dispatch(getFeedbacksSussess(feedbacks));
		if (err) {
			dispatch(getFeedbacksFail(err));
		}
	};
};

export const addFeedback = (feedback, err) => {
	return async function (dispatch) {
		dispatch(addFeedbackStart());

		const newFeedback = await feedbackService.addNewFeedback(feedback);

		dispatch(addFeedbackSussess(newFeedback));
		if (err) {
			dispatch(addFeedbackFail(err));
		}
	};
};

export const editFeedbackInit = (id, newContent, err) => {
	return async function (dispatch) {
		dispatch(editFeedbackStart());

		const updatedFeedback = await feedbackService.updateFeedback(
			id,
			newContent
		);

		dispatch(editFeedbackSussess(updatedFeedback));
		if (err) {
			dispatch(editFeedbackFail(err));
		}
	};
};

export const deleteFeedbackInit = (id, err) => {
	return async function (dispatch) {
		dispatch(deleteFeedbackStart());
		console.log(id);

		await feedbackService.deleteFeedback(id);

		dispatch(deleteFeedbackSussess());
		if (err) {
			dispatch(deleteFeedbackFail(err));
		}
	};
};

export const getSingleFeedback = (id, err) => {
	return async function (dispatch) {
		dispatch(getSingleFeedbackStart());

		const feedSnap = await feedbackService.getOneFeedbackRef(id);
		dispatch(getSingleFeedbackSussess({ ...feedSnap.data() }));
		if (err) {
			dispatch(getSingleFeedbackFail(err));
		}
	};
};

// comments

export const addCommentToFeedback = (id, user, comment, err) => {
	return async function (dispatch) {
		dispatch(addCommentToFeedbackStart());

		const updatedFeedback = await feedbackService.updateComment(
			id,
			user,
			comment
		);

		dispatch(addCommentToFeedbackSussess(updatedFeedback));

		dispatch(addCommentToFeedbackSussess());

		if (err) {
			dispatch(addCommentToFeedbackFail(err));
		}
	};
};
