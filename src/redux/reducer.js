/* eslint-disable indent */
import * as types from "./actionTypes";

const initialState = {
	feedbacks: [],
	feedback: {},
	loading: false,
	error: null,
};

const feedbackReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_FEEDBACKS_START:
		case types.GET_SINGLE_FEEDBACK_START:
			return {
				...state,
				loading: true,
			};
		case types.GET_FEEDBACKS_SUCCESS:
			return {
				...state,
				loading: false,
				feedbacks: action.payload,
			};
		case types.GET_SINGLE_FEEDBACK_SUCCESS:
			return {
				...state,
				loading: false,
				feedback: action.payload,
			};
		case types.GET_FEEDBACKS_FAIL:
		case types.GET_SINGLE_FEEDBACK_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case types.DELETE_FEEDBACK_START:
		case types.ADD_FEEDBACK_START:
		case types.EDIT_FEEDBACK_START:
		case types.ADD_COMMENT_TO_FEEDBACK_START:
			return {
				...state,
				loading: true,
			};
		case types.DELETE_FEEDBACK_SUCCESS:
		case types.ADD_FEEDBACK_SUCCESS:
		case types.EDIT_FEEDBACK_SUCCESS:
		case types.ADD_COMMENT_TO_FEEDBACK_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case types.DELETE_FEEDBACK_FAIL:
		case types.ADD_FEEDBACK_FAIL:
		case types.EDIT_FEEDBACK_FAIL:
		case types.ADD_COMMENT_TO_FEEDBACK_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default feedbackReducer;
