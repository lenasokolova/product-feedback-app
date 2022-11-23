import * as types from './actionTypes'
import { db } from '../firebase';
import dbRef from '../firebase';
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
    return async function (dispatch) {
        dispatch(getFeedbacksStart());



        try {
            const querySnapshot = await getDocs(collection(db, "feedbacks"));
            // querySnapshot.forEach((doc) => {
            //     console.log(doc.id, " => ", doc.data())
            // });

            // const feedbacks = querySnapshot.forEach((doc) => {
            //     console.log(doc.id, " => ", doc.data())
            // })
            dispatch(getFeedbacksSussess(querySnapshot))

            // setData({});

        } catch (error) {
            dispatch(getFeedbacksFail(error))
        }




        // import { collection, getDocs } from "firebase/firestore";

        // const querySnapshot = await getDocs(collection(db, "cities"));
        // querySnapshot.forEach((doc) => {
        // // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // });

        // const getFeedbacksFromFirebase = [];
        //     const feedbacks = db.collection('feedbacks').onSnapshot((querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             getFeedbacksFromFirebase.push({
        //                 data: doc.data(),
        //                 key: doc.id,
        //             })
        //             setFeedbacksAll(getFeedbacksFromFirebase);
        //             setLoading(false);
        //         })
        //     })

        //     return () => feedbacks();





        // dbRef.child("feedbacks").on("value", (snapshot) => {
        //     try {
        //         if (snapshot.val() !== null) {
        //             dispatch(getFeedbacksSussess(snapshot.val()));
        //         } else {
        //             // setData({});
        //         }
        //     } catch (error) {
        //         dispatch(getFeedbacksFail(error))
        //     }
        // })


    }
}


// import { getDatabase, ref, child, get } from "firebase/database";
// import { useDispatch } from 'react-redux';

// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });



// const dbRef = firebase.database().ref();
// dbRef.child("users").child(userId).get().then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });