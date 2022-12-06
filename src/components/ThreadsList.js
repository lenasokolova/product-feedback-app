import React, { useEffect } from 'react';
import styled from 'styled-components';
import ThreadExcerpt from './ThreadExcerpt';
import { useSelector, useDispatch } from 'react-redux';
import { getFeedbacks, } from './../redux/actions';
import { useNavigate } from 'react-router-dom';


const ThreadsList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { feedbacks } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getFeedbacks())

    }, []);


    return (
        <ThreadListContainer >
            {feedbacks && feedbacks.map((item, index) => (
                <div key={index}
                >
                    <ThreadExcerpt
                        onClick={() => navigate(`/feedback/${item.id}`)}
                        title={item.title}
                        category={item.category}
                        detail={item.detail}
                        comments={item.comments?.length}
                        upVotesCount={item.upVotesCount?.length}
                        createdBy={item.createdBy}
                    />

                </div>
            ))}
        </ThreadListContainer>
    )
}

export default ThreadsList


const ThreadListContainer = styled.div`
    height: 100vh;
`;
