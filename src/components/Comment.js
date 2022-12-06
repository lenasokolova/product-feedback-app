import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { db } from '../firebase';

const Comment = () => {

    const { id } = useParams();
    const [comments, setComments] = useState([]);


    useEffect(() => {
        const commentRef = doc(db, "feedbacks", id);
        onSnapshot(commentRef, (snapshot) => {
            setComments(snapshot.data().comments);
        })
    }, [])

    console.log(comments)

    return (
        <>
            {comments !== null && comments.map(({ comment, commentId, createdBy, photo }) => (
                <CommentContainer key={commentId} id={commentId}>
                    <img src={photo} alt="user avatar" />
                    <CommentBody>
                        <CommentInfo>
                            <CommentInfoLeft>
                                <h4>{createdBy}</h4>
                                <span>@{createdBy}</span>
                            </CommentInfoLeft>
                            <CommentInfoRight>
                                <span>Reply</span>
                            </CommentInfoRight>
                        </CommentInfo>
                        <CommentText>
                            <p>{comment}</p>
                        </CommentText>
                    </CommentBody>
                </CommentContainer>
            ))}

        </>
    )
}

export default Comment;

const CommentContainer = styled.div`
    display: flex;
    background-color: #fff;
    padding: 25px;
    margin-bottom: 18px;
    border-radius: 10px;
    
    >img {
        height: 35px;
        width: 35px;
        object-fit: cover;
        border-radius: 50px;
        margin-right: 25px;
    }
`;

const CommentBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;


const CommentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const CommentInfoLeft = styled.div`
    >h4 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: -5px;
    }

    >span {
        font-size: 12px;
    }

`;
const CommentInfoRight = styled.div`
    >span {
        font-size: 12px;
        font-weight: 900;
        color: #4661e6;
    }
`;

const CommentText = styled.div`
    width: 100%;

    >p {
        font-size: 14px;
    }
`;






