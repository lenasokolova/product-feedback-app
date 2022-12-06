import { combineReducers } from "redux";

import feedbackReducer from "./reducer";

const rootReducer = combineReducers({
    data: feedbackReducer,

});

export default rootReducer;