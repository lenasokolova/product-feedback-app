import * as types from './actionTypes'

const initialState = {
    feedbacks: [],
    loading: false,
    error: null,
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FEEDBACKS_START:
            return {
                ...state,
                loading: true
            }
        case types.GET_FEEDBACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                feedbacks: action.payload,
            }
        case types.GET_FEEDBACKS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.DELETE_FEEDBACK_START:
        case types.ADD_FEEDBACK_START:
            return {
                ...state,
                loading: true
            }
        case types.DELETE_FEEDBACK_SUCCESS:
        case types.ADD_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,

            }
        case types.DELETE_FEEDBACK_FAIL:
        case types.ADD_FEEDBACK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.EDIT_FEEDBACK_START:
            return {
                ...state,
                loading: true
            }
        case types.EDIT_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,

            }
        case types.EDIT_FEEDBACK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }

}

export default feedbackReducer;