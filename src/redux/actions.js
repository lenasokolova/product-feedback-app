import * as types from './actionTypes'
import { db } from '../firebase';
// import dbRef from '../firebase';
import { collection, getDocs } from "firebase/firestore";


// const dispatch = useDispatch()

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


export const getFeedbacks = () => {
    return function (dispatch) {
        dispatch(getFeedbacksStart())

        const getData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "feedbacks"));
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

