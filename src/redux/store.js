import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
});


export default store;
