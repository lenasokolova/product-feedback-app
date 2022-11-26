import * as types from './actionTypes'
import { db } from '../firebase';
import { addDoc, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { feedbacksCollectionRef } from '../firebase';

// get feedbacks actions

const getFeedbacksStart = () => ({
    type: types.GET_FEEDBACKS_START,
});

const getFeedbacksSussess = (feedbacks) => ({
    type: types.GET_FEEDBACKS_SUCCESS,
    payload: feedbacks
});

const getFeedbacksFail = () => ({
    type: types.GET_FEEDBACKS_FAIL,
});

// delete feedbacks actions

const deleteFeedbackStart = () => ({
    type: types.DELETE_FEEDBACK_START,
});

const deleteFeedbackSussess = () => ({
    type: types.DELETE_FEEDBACK_SUCCESS,
});

const deleteFeedbackFail = () => ({
    type: types.DELETE_FEEDBACK_FAIL,
});

// add feedbacks actions

const addFeedbackStart = () => ({
    type: types.ADD_FEEDBACK_START,
});

const addFeedbackSussess = () => ({
    type: types.ADD_FEEDBACK_SUCCESS,
});

const addFeedbackFail = () => ({
    type: types.ADD_FEEDBACK_FAIL,
});

// edit feedbacks actions

const editFeedbackStart = () => ({
    type: types.EDIT_FEEDBACK_START,
});

const editFeedbackSussess = () => ({
    type: types.EDIT_FEEDBACK_SUCCESS,
});

const editFeedbackFail = () => ({
    type: types.EDIT_FEEDBACK_FAIL,
});


export const getFeedbacks = () => {
    return function (dispatch) {
        dispatch(getFeedbacksStart())

        const getData = async () => {
            try {
                const querySnapshot = await getDocs(feedbacksCollectionRef);
                const feedbacks = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
                dispatch(getFeedbacksSussess(feedbacks));

            } catch (error) {
                dispatch(getFeedbacksFail(error))
            }
        }
        getData();
    }
}

export const addFeedback = (feedback, err) => {
    return function (dispatch) {
        dispatch(addFeedbackStart());

        addDoc(feedbacksCollectionRef, feedback)
        dispatch(addFeedbackSussess());
        if (err) {
            dispatch(addFeedbackFail(err))
        }
    };
}

export const editFeedback = (feedback, id, err) => {
    return function (dispatch) {
        dispatch(editFeedbackStart());

        const feedDoc = doc(db, "feedbacks", id);
        console.log(id)
        setDoc(feedDoc, feedback)


        dispatch(editFeedbackSussess());
        if (err) {
            dispatch(editFeedbackFail(err))
        }
    };
}

export const deleteFeedback = (id, err) => {
    return async function (dispatch) {
        dispatch(deleteFeedbackStart());

        const feedDoc = doc(db, "feedbacks", id);
        await deleteDoc(feedDoc);
        dispatch(deleteFeedbackSussess())
        if (err) {
            dispatch(deleteFeedbackFail(err))
        }
    };
}
