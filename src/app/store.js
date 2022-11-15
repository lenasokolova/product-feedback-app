import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../features/feedbacks/feedbackSlice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
