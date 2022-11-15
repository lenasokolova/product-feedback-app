import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../features/feedbacks/feedbackSlice';
import userReducer from '../features/users/userSlice';


export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
    user: userReducer,
  },
});
