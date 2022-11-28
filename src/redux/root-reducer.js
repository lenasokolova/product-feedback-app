import { combineReducers } from "redux";

import feedbackReducer from "./reducer";
import commentReducer from "./comment-reducer";


const rootReducer = combineReducers({
    data: feedbackReducer, // data name will be used in ThreadList in useSelector(state => state.data)
    comments: commentReducer,

    // comments name will be used in ThreadList in useSelector(state => state.comments)

});

export default rootReducer;