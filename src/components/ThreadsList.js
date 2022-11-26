import React, { useEffect } from 'react';
import styled from 'styled-components';
import ThreadExcerpt from './ThreadExcerpt';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFeedback, getFeedbacks } from './../redux/actions';
import { Link, useNavigate } from 'react-router-dom';

const ThreadsList = () => {

    const { feedbacks: data } = useSelector(state => state.data);

    let dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getFeedbacks());
    }, [dispatch]);

    const deletePost = async (id) => {
        dispatch(deleteFeedback(id))
    };

    const renderedFeedbacks = Object.keys(data).map((id) => {
        return (
            <div key={data[id].id} id={data[id].id}

            >
                <ThreadExcerpt
                    onClick={() => navigate(`/feedback/${id}`)}
                    title={data[id].title}
                    category={data[id].category}
                    detail={data[id].detail}
                    commentsCount={data[id].commentsCount}
                    upVotesCount={data[id].upVotesCount}
                />
                <DeleteBtn onClick={() => deletePost(data[id].id)}>Delete</DeleteBtn>
                <Link to={`/update/${id}`}>Edit this feedback</Link>
            </div>
        )
    })

    return (
        <ThreadListContainer >
            {renderedFeedbacks}
        </ThreadListContainer>
    )
}

export default ThreadsList


const ThreadListContainer = styled.div`
    height: 100vh;
`;

const DeleteBtn = styled.button`

`;