import React, { useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { arrayUnion, doc, Timestamp } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AddCommentSection = () => {

    const { id } = useParams();

    const [comment, setComment] = useState({
        comment: '',
        createdAt: Timestamp.now().toDate(),
        commentId: nanoid(),
    });
    const commentRef = doc(db, "feedbacks", id);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        updateDoc(commentRef, {
            comments: arrayUnion({
                comment: comment,
                createdAt: Timestamp.now().toDate(),
                commentId: nanoid(),
            })
        })

    }

    return (
        <AddCommentContainer>
            <h3>Add Comment</h3>
            <form>
                <textarea
                    name="comment"
                    id="comment"
                    value={comment.comment}
                    onChange={(e) => { setComment(e.target.value) }}
                    placeholder='Type your comment here'
                />
            </form>
            <div>
                <span>250 Characters left</span>
                <button onClick={(e) => { handleCommentSubmit(e) }}>Post comment</button>
            </div>
        </AddCommentContainer>
    )
}

export default AddCommentSection

const AddCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px;
    margin-bottom: 18px;
    border-radius: 10px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

    >h3 {
        font-size: 16px;
        margin-bottom: 16px;
    }

    >form > textarea {
        width: 100%;
        border: none;
        background-color: #f7f8fd;
        height: 70px;
        padding: 15px;
        margin-bottom: 10px;
    }

    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    >div >span {
        font-size: 12px;
        font-weight: 500;
        color: #a1a8c0;
    }

    >div >button {
        display: flex;
        align-items: center;
        background-color: #ae1feb;
        border: none;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 25px;
        border-radius: 10px;
        cursor: pointer;
        

        :hover {
            background-color: #8c2bc4;

        }
    }
`;