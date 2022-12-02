import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThreadExcerpt from './ThreadExcerpt';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFeedback, deleteFeedbackInit, getFeedbacks, getSingleFeedback } from './../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { nanoid } from '@reduxjs/toolkit';



const ThreadsList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { feedbacks } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(getFeedbacks())

    }, [])



    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure younwant to delete this feedback?")) {
            dispatch(deleteFeedbackInit(id));
            console.log(id)
        }
    }



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
                    />
                    <DeleteBtn onClick={() => deleteFeedback(item.id)}>Delete</DeleteBtn>
                    <Link to={`/update/${item.id}`}>Edit this feedback</Link>
                </div>
            ))}
        </ThreadListContainer>
    )
}

export default ThreadsList


const ThreadListContainer = styled.div`
    height: 100vh;
`;

const DeleteBtn = styled.button`

`;







// -----------------------------------------------
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import ThreadExcerpt from './ThreadExcerpt';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteFeedback, getFeedbacks } from './../redux/actions';
// import { Link, useNavigate } from 'react-router-dom';

// const ThreadsList = () => {

//     const { feedbacks: data } = useSelector(state => state.data);

//     const { title, category, detail, commentsCount, upVotesCount, id } = data
//     console.log("this is data => ", data)

//     let dispatch = useDispatch();
//     const navigate = useNavigate();


//     useEffect(() => {
//         dispatch(getFeedbacks());
//     }, [dispatch]);

//     const deletePost = async (id) => {
//         dispatch(deleteFeedback(id))
//     };

//     const renderedFeedbacks = Object.keys(data).map((id) => {
//         return (
//             <div key={data[id].id} id={data[id].id}

//             >
//                 <ThreadExcerpt
//                     onClick={() => navigate(`/feedback/${data[id].id}`)}
//                     title={data[id].title}
//                     category={data[id].category}
//                     detail={data[id].detail}
//                     commentsCount={data[id].commentsCount}
//                     upVotesCount={data[id].upVotesCount}
//                 />
//                 <DeleteBtn onClick={() => deletePost(id)}>Delete</DeleteBtn>
//                 <Link to={`/update/${data[id].id}`}>Edit this feedback</Link>
//             </div>
//         )
//     })

//     return (
//         <ThreadListContainer >
//             {renderedFeedbacks}
//         </ThreadListContainer>
//     )
// }

// export default ThreadsList


// const ThreadListContainer = styled.div`
//     height: 100vh;
// `;

// const DeleteBtn = styled.button`

// `;