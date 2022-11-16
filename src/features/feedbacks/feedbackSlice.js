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
        editFeedback: (state, action) => {
            if (state.selectedFeedback.id === action.payload.id) {
                state.selectedFeedback = action.payload;
            }

        },
    },
})

export const { selectFeedback, editFeedback } = feedbackSlice.actions;

export const selectOpenFeedback = (state) => state.feedback.selectedFeedback;
export const selectEditedFeedback = (state) => state.feedback.selectedFeedback;

export default feedbackSlice.reducer;