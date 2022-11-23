import { combineReducers } from "redux";

import feedbackReducer from "./reducer";

const rootReducer = combineReducers({
    data: feedbackReducer, // data name will be used in ThreadList in useSelector(state => state.data)
});

export default rootReducer;