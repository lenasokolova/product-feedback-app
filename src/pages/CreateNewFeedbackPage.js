import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarFeedback from '../components/NavbarFeedback';
import { nanoid } from '@reduxjs/toolkit';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFeedback } from './../redux/actions';
import { Timestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';



const CreateNewFeedbackPage = () => {
    const [user] = useAuthState(auth);

    const initialState = {
        createdBy: user.displayName,
        category: "All",
        comments: [],
        detail: "",
        id: nanoid(),
        createdAt: Timestamp.now().toDate(),
        status: "Suggestion",
        title: "",
        upVotesCount: []
    }

    const [state, setState] = useState(initialState);

    const { category, detail, title } = state;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addFeedback(state));
        setState({ ...state, title: '', detail: "", category: "All" });
        navigate("/");
    }

    const cancelAddFeedback = () => {
        navigate("/");
    }

    return (
        <NewFeedbackContainer>
            <NewFeedbackWholeContainer>
                <NavbarFeedback />
                <NewFeedbackInnerContainer>
                    <h2>Create New Feedback</h2>
                    <NewFeedbackFormContainer onSubmit={handleSubmit}>
                        <h4>Feedback Title</h4>
                        <label htmlFor="title">Add a short, descriptive headline</label>
                        <input
                            type="text"
                            name='title'
                            value={title}
                            onChange={handleInputChange}
                        />

                        <h4>Category</h4>
                        <label htmlFor="category">Choose a category for your feedback</label>
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={handleInputChange}
                        >
                            <option value="All">All</option>
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="Bug">Bug</option>
                            <option value="Feature">Feature</option>
                        </select>

                        <h4>Feedback Detail</h4>
                        <label htmlFor="detail">Include any specific comments on what should be improved, added, etc.</label>
                        <textarea
                            name="detail"
                            id="detail"
                            value={detail}
                            onChange={handleInputChange}
                        />
                        <NewFeedbackButtonsContainer>
                            <NewFeedbackButtonCancel
                                onClick={cancelAddFeedback}
                            >Cancel</NewFeedbackButtonCancel>
                            <NewFeedbackButtonAdd
                                type='submit'
                            >Add Feedback</NewFeedbackButtonAdd>
                        </NewFeedbackButtonsContainer>
                    </NewFeedbackFormContainer>
                </NewFeedbackInnerContainer>
            </NewFeedbackWholeContainer>
        </NewFeedbackContainer>
    )
}

export default CreateNewFeedbackPage;


const NewFeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewFeedbackWholeContainer = styled.div``;

const NewFeedbackInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

    >h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }
`;

const NewFeedbackFormContainer = styled.form`
    display: flex;
    flex-direction: column;

    >h4 {
        font-size: 14px;
        margin-bottom: 3px;
    }

    >label {
        margin-bottom: 8px;
        font-size: 14px;
    }

    >input, select, textarea {
        margin-bottom: 18px;
        background-color: #f2f4ff;
        border: none;
        padding: 15px;
        border-radius: 10px;
    }

`;

const NewFeedbackButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    >button {
        border: none;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 25px;
        border-radius: 10px;
        margin-left: 10px;

        cursor: pointer;
    

    }
`;

const NewFeedbackButtonCancel = styled.button`
    background-color: #3b4374;
    
    :hover {
        background-color: #272e59;

    }
`;


const NewFeedbackButtonAdd = styled.button`
    background-color: #ae1feb;
    
    :hover {
        background-color: #8c2bc4; 

    }
`;
