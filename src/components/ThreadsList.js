import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThreadExcerpt from './ThreadExcerpt';

import { db } from '../firebase';

const ThreadsList = () => {

    const [loading, setLoading] = useState(true);
    const [feedbacksAll, setFeedbacksAll] = useState([]);

    useEffect(() => {
        const getFeedbacksFromFirebase = [];
        const feedbacks = db.collection('feedbacks').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getFeedbacksFromFirebase.push({
                    data: doc.data(),
                    key: doc.id,
                })
                setFeedbacksAll(getFeedbacksFromFirebase);
                setLoading(false);
            })
        })

        return () => feedbacks();
    }, [])


    console.log(feedbacksAll)

    if (loading) {
        return <h1>Loading firebase data...</h1>
    }

    const renderedFeedbacks = feedbacksAll.map(({
        key,
        data: {
            id,
            title,
            category,
            detail,
            commentsCount,
            upVotesCount
        } }) => {

        return (
            <ThreadExcerpt
                id={id}
                key={key}
                title={title}
                category={category}
                detail={detail}
                commentsCount={commentsCount}
                upVotesCount={upVotesCount}
            />

        )


    })


    return (
        <ThreadListContainer>
            {renderedFeedbacks}
        </ThreadListContainer>
    )
}

export default ThreadsList


const ThreadListContainer = styled.div`
    height: 100vh;
`;
