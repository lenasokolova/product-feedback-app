import React, { useEffect } from 'react';
import styled from 'styled-components';
import ThreadExcerpt from './ThreadExcerpt';
import { useSelector, useDispatch } from 'react-redux';

import { getFeedbacks } from './../redux/actions';

const ThreadsList = () => {

    const { feedbacks: data } = useSelector(state => state.data);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeedbacks());
    }, [])

    const renderedFeedbacks = Object.keys(data).map((id) => {
        return (
            <ThreadExcerpt
                id={data[id].id}
                key={data[id].id}
                title={data[id].title}
                category={data[id].category}
                detail={data[id].detail}
                commentsCount={data[id].commentsCount}
                upVotesCount={data[id].upVotesCount}
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
