import * as types from './actionTypes'
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, orderBy, updateDoc } from "firebase/firestore";
import { db } from './../firebase';

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
    return async function (dispatch) {
        dispatch(getFeedbacksStart());

        const querySnapshot = await getDocs(collection(db, "feedbacks"), orderBy("createdAt", "desc"));
        const feedbacks = [];

        querySnapshot.forEach((doc) => {
            feedbacks.push({ ...doc.data(), id: doc.id })
        });
        dispatch(getFeedbacksSussess(feedbacks));
        if (err) {
            dispatch(getFeedbacksFail(err))
        }

    }
}


export const addFeedback = (feedback, err) => {
    return async function (dispatch) {
        dispatch(addFeedbackStart());

        const collectionRef = collection(db, "feedbacks");
        await addDoc(collectionRef, feedback);
        dispatch(addFeedbackSussess());
        if (err) {
            dispatch(addFeedbackFail(err))
        }
    };
}

export const editFeedbackInit = (feedback, id, err) => {
    return async function (dispatch) {

        await updateDoc(id, feedback);

        dispatch(editFeedbackSussess());
        if (err) {
            dispatch(editFeedbackFail(err))
        }
    };
}

export const deleteFeedbackInit = (id, err) => {
    return async function (dispatch) {
        dispatch(deleteFeedbackStart());

        await deleteDoc(doc(db, "feedbacks", id))

        dispatch(deleteFeedbackSussess());
        if (err) {
            dispatch(deleteFeedbackFail(err))
        }
    };
}

export const getSingleFeedback = (id, err) => {
    return async function (dispatch) {
        dispatch(getSingleFeedbackStart());

        const docRef = doc(db, "feedbacks", id)

        const docSnap = await getDoc(docRef);
        dispatch(getSingleFeedbackSussess({ ...docSnap.data() }));
        if (err) {
            dispatch(deleteFeedbackFail(err))
        }
    };
}

// comments

export const addCommentToFeedback = (comment, id, err) => {
    return function (dispatch) {
        dispatch(addCommentToFeedbackStart());
        const commentRef = doc(db, "feedbacks", id);
        updateDoc(commentRef, {
            comments: arrayUnion({
                ...comment
            })
        })
        dispatch(addCommentToFeedbackSussess());

        if (err) {
            dispatch(addCommentToFeedbackFail(err))
        }
    }
}

