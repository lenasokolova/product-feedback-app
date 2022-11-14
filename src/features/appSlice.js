import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        feedbackId: null,
    },
    reducer: {
        enterFeedback: (state, action) => {
            state.feedbackId = action.payload.feedbackId;
        },
    },
})

export const { enterFeedback } = appSlice.actions;

export const selectFeedbackId = state => state.app.feedbackId;

export default appSlice.reducer;