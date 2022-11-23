import * as types from './actionTypes'

const initialState = {
    feedbacks: {},
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
        default:
            return state;
    }

}

export default feedbackReducer;