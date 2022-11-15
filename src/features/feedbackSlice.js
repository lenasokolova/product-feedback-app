import { createSlice } from "@reduxjs/toolkit";


export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        selectedFeedback: null,
    },
    reducers: {
        selectFeedback: (state, action) => {
            state.selectedFeedback = action.payload;
        },
    },
})

export const { selectFeedback } = feedbackSlice.actions;

export const selectOpenFeedback = (state) => state.feedback.selectedFeedback;

export default feedbackSlice.reducer;