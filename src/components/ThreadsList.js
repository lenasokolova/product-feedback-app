import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import ThreadExcerpt from './ThreadExcerpt';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../firebase';
import { getFeedbacks } from './../redux/actions';

const ThreadsList = () => {
    // const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    console.log("data", data);

    const state = useSelector(state => state.data);
    console.log("state =>", state);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeedbacks());
    }, [])


    // console.log(feedbacksAll)

    // if (loading) {
    //     return <h1>Loading firebase data...</h1>
    // }

    // const renderedFeedbacks = feedbacksAll.map(({
    //     key,
    //     data: {
    //         id,
    //         title,
    //         category,
    //         detail,
    //         commentsCount,
    //         upVotesCount
    //     } }) => {

    //     return (
    //         <ThreadExcerpt
    //             id={id}
    //             key={key}
    //             title={title}
    //             category={category}
    //             detail={detail}
    //             commentsCount={commentsCount}
    //             upVotesCount={upVotesCount}
    //         />

    //     )


    // })


    // return (
    //     <ThreadListContainer>
    //         {renderedFeedbacks}
    //     </ThreadListContainer>
    // )


}

export default ThreadsList


// const ThreadListContainer = styled.div`
//     height: 100vh;
// `;



// const [loading, setLoading] = useState(true);
    // const [feedbacksAll, setFeedbacksAll] = useState([]);

    // useEffect(() => {
    //     const getFeedbacksFromFirebase = [];
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
    // }, [])


    // console.log(feedbacksAll)

    // if (loading) {
    //     return <h1>Loading firebase data...</h1>
    // }

    // const renderedFeedbacks = feedbacksAll.map(({
    //     key,
    //     data: {
    //         id,
    //         title,
    //         category,
    //         detail,
    //         commentsCount,
    //         upVotesCount
    //     } }) => {

    //     return (
    //         <ThreadExcerpt
    //             id={id}
    //             key={key}
    //             title={title}
    //             category={category}
    //             detail={detail}
    //             commentsCount={commentsCount}
    //             upVotesCount={upVotesCount}
    //         />

    //     )


    // })


    // return (
    //     <ThreadListContainer>
    //         {renderedFeedbacks}
    //     </ThreadListContainer>
    // )