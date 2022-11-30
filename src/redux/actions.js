import * as types from './actionTypes'
import { db } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, updateDoc } from "firebase/firestore";
// import { feedbacksCollectionRef } from '../firebase';
// import { commentsCollectionRef } from '../firebase';




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

// get ONE feedback actions

const getSingleFeedbackStart = () => ({
    type: types.GET_SINGLE_FEEDBACK_START,
});

const getSingleFeedbackSussess = (feedback) => ({
    type: types.GET_SINGLE_FEEDBACK_SUCCESS,
    payload: feedback
});

const getSingleFeedbackFail = () => ({
    type: types.GET_SINGLE_FEEDBACK_FAIL,
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

// add comment to feedback actions

const addCommentToFeedbackStart = () => ({
    type: types.ADD_COMMENT_TO_FEEDBACK_START,
})

const addCommentToFeedbackSussess = () => ({
    type: types.ADD_COMMENT_TO_FEEDBACK_SUCCESS,
});

const addCommentToFeedbackFail = () => ({
    type: types.ADD_COMMENT_TO_FEEDBACK_FAIL,
});


export const getFeedbacks = (err) => {
    return function (dispatch) {
        dispatch(getFeedbacksStart());
        db.collection("feedbacks").onSnapshot((querySnapshot) => {
            const feedbacks = [];
            querySnapshot.forEach((doc) => {
                feedbacks.push({ ...doc.data(), id: doc.id })
            });
            dispatch(getFeedbacksSussess(feedbacks));
        });
        if (err) {
            dispatch(getFeedbacksFail(err))
        }
    }
}


export const addFeedback = (feedback, err) => {
    return function (dispatch) {
        dispatch(addFeedbackStart());

        db.collection("feedbacks").doc().set(feedback);

        // addDoc(feedbacksCollectionRef, feedback)
        dispatch(addFeedbackSussess());
        if (err) {
            dispatch(addFeedbackFail(err))
        }
    };
}

export const editFeedbackInit = (feedback, id, err) => {
    return async function (dispatch) {
        dispatch(editFeedbackStart());
        console.log(id)

        // await db.collection("feedbacks").doc(id).update(feedback);
        // console.log(id)

        const feedDoc = doc(db, "feedbacks", id);
        await updateDoc(feedDoc, feedback);
        console.log(id)

        dispatch(editFeedbackSussess());
        if (err) {
            dispatch(editFeedbackFail(err))
        }
    };
}

export const deleteFeedbackInit = (id, err) => {
    return function (dispatch) {
        dispatch(deleteFeedbackStart());

        db.collection("feedbacks").doc(id).delete();
        dispatch(deleteFeedbackSussess());
        if (err) {
            dispatch(deleteFeedbackFail(err))
        }
    };
}

export const getSingleFeedback = (id) => {
    return function (dispatch) {
        dispatch(getSingleFeedbackStart());

        db.collection("feedbacks")
            .doc(id)
            .get()
            .then((feedback) => {
                dispatch(getSingleFeedbackSussess({ ...feedback.data() }));
            }).catch(error => dispatch(getSingleFeedbackFail(error)));
    };
}

// comments

export const addCommentToFeedback = (comment, err) => {
    return function (dispatch) {
        dispatch(addCommentToFeedbackStart())

        // addDoc(commentsCollectionRef, comment)

        dispatch(addCommentToFeedbackSussess());
        if (err) {
            dispatch(addCommentToFeedbackFail(err))
        }
    }
}
