import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Thread from './Thread';

import { db } from '../firebase';

const ThreadsList = () => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const feedbacks = db.collection('feedbacks').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                })
                setPosts(getPostsFromFirebase);
                setLoading(false);
            })
        })

        return () => feedbacks();
    }, [])


    console.log(posts)

    if (loading) {
        return <h1>Loading firebase data...</h1>
    }

    const renderedFeedbacks = posts.map(post => {

        return (
            <Thread
                title={post.title}
                category={post.category}
                detail={post.detail}
                commentsCount={post.commentsCount}
                upVotesCount={post.upVotesCount}
                key={post.key}
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
