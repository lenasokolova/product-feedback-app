import React, { useEffect, useState } from 'react'

import styled from 'styled-components';
import NavbarFeedback from '../components/NavbarFeedback';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleFeedback, editFeedbackInit } from './../redux/actions';
import { Timestamp } from 'firebase/firestore';
import { nanoid } from '@reduxjs/toolkit';
import { useRef } from 'react';



const EditFeedbackPage = () => {

    const { feedback } = useSelector((state) => state.data);
    const { category, detail, title, status, id: feedbackId } = feedback;

    const initialState = {
        category: category,
        comments: [],
        detail: detail,
        id: feedbackId,
        createdAt: Timestamp.now().toDate(),
        status: status,
        title: title,
        upVotesCount: []
    }

    const { id: feedId } = initialState

    const [state, setState] = useState(initialState);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const cancelAddFeedback = () => {
        navigate("/")
    }

    useEffect(() => {
        dispatch(getSingleFeedback(id));

    }, []);

    const params = useParams();
    const { id } = params;

    const editFeedback = (e, feedId) => {
        e.preventDefault();
        dispatch(editFeedbackInit(feedId, feedback))
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
        // console.log("this is new state => ", state)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, title: '', detail: "", category: "All" })
    }

    return (
        <EditFeedbackContainer>
            <EditFeedbackWholeContainer>
                <NavbarFeedback />
                <EditFeedbackInnerContainer>
                    <h2>Edit Feedback</h2>
                    <EditFeedbackFormContainer
                        onSubmit={handleSubmit}
                    >
                        <h4>Feedback Title</h4>
                        <label htmlFor="title">Add a short, descriptive headline</label>
                        <input
                            type="text"
                            name='title'
                            value={state.title}
                            onChange={handleInputChange}
                        // placeholder={title}

                        />

                        <h4>Category</h4>
                        <label htmlFor="category">Change a category for your feedback</label>
                        <select
                            name="category"
                            id="category"
                            value={state.category}
                            onChange={handleInputChange}
                        // placeholder={category}

                        >
                            <option value="All">All</option>
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="Bug">Bug</option>
                            <option value="Feature">Feature</option>
                        </select>

                        <h4>Update Status</h4>
                        <label htmlFor="status">Change feedback status</label>
                        <select
                            name="status"
                            id="status"
                            value={state.status}
                            defaultValue={status}
                            onChange={handleInputChange}
                        // placeholder={status}

                        >
                            <option value="Suggestion">Suggestion</option>
                            <option value="Planned">Planned</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Live">Live</option>
                        </select>

                        <h4>Change a feedback detail</h4>
                        <label htmlFor="detail">Include any specific comments on what should be improved, added, etc.</label>
                        <textarea
                            name="detail"
                            id="detail"
                            value={state.detail}
                            onChange={handleInputChange}
                        // placeholder={detail}


                        />
                        <EditFeedbackButtonsContainer>
                            <EditFeedbackButtonDelete
                            // onClick={deleteFeedback}
                            >
                                Delete
                            </EditFeedbackButtonDelete>

                            <EditFeedbackButtonCancel onClick={cancelAddFeedback}>Cancel</EditFeedbackButtonCancel>
                            <EditFeedbackButtonAdd
                                onClick={editFeedback}
                            >Edit Feedback</EditFeedbackButtonAdd>
                        </EditFeedbackButtonsContainer>
                    </EditFeedbackFormContainer>



                </EditFeedbackInnerContainer>
            </EditFeedbackWholeContainer>
        </EditFeedbackContainer >
    )
}


export default EditFeedbackPage


const EditFeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const EditFeedbackWholeContainer = styled.div``;

const EditFeedbackInnerContainer = styled.div`
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

const EditFeedbackFormContainer = styled.form`
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

const EditFeedbackButtonsContainer = styled.div`
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

const EditFeedbackButtonDelete = styled.button`
    background-color: #3b4374;
    
    :hover {
        background-color: #272e59;

    }
`;

const EditFeedbackButtonCancel = styled.button`
    background-color: #3b4374;
    
    :hover {
        background-color: #272e59;

    }
`;


const EditFeedbackButtonAdd = styled.button`
    background-color: #ae1feb;
    
    :hover {
        background-color: #8c2bc4; 

    }
`;



/* 
 const values = {
        category: "",
        commentsCount: 0,
        detail: "",
        id: "",
        status: "",
        title: "",
        upVotesCount: 0
    };

    const [initialState, setState] = useState(values);
    const { feedbacks: data } = useSelector((state) => state.data)

    const { title, category, detail, status } = initialState;

    let dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const currentId = params.id

    useEffect(() => {
        if (isEmpty(currentId)) {
            console.log("initialState", initialState);
            setState({ ...values });
        } else {
            setState({ ...data[currentId] });
        }
    }, [currentId, data]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...initialState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("initialState", initialState);
        dispatch(editFeedback(initialState, currentId));

        navigate("/")
    }
*/






/*
const EditFeedbackPage = () => {

    const initialState = {
        category: "All",
        comments: [],
        detail: "",
        id: nanoid(),
        createdAt: Timestamp.now().toDate(),
        status: "Suggestion",
        title: "",
        upVotesCount: []
    }

    const ref = useRef()
    const [state, setState] = useState(initialState);
    const { feedback } = useSelector((state) => state.data);

    const { category, detail, title, status } = feedback;
    console.log(feedback)

    const params = useParams();
    const { id } = params;
    console.log("id from params => ", id)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const cancelAddFeedback = () => {
        navigate("/")
    }

    useEffect(() => {
        dispatch(getSingleFeedback(id));
        console.log("feedbackId => ", id);

    }, []);

    const editFeedback = async (e, id) => {
        e.preventDefault();
        console.log("feedbackId => ", id);
        dispatch(editFeedbackInit(id, feedback))
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, title: '', detail: "", category: "All" })
    }

    return (
        <EditFeedbackContainer>
            <EditFeedbackWholeContainer>
                <NavbarFeedback />
                <EditFeedbackInnerContainer>
                    <h2>Edit Feedback</h2>
                    <EditFeedbackFormContainer
                        onSubmit={handleSubmit}
                    >
                        <h4>Feedback Title</h4>
                        <label htmlFor="title">Add a short, descriptive headline</label>
                        <input
                            ref={ref}

                            type="text"
                            name='title'
                            defaultValue={title}
                            onChange={handleInputChange}

                        />

                        <h4>Category</h4>
                        <label htmlFor="category">Change a category for your feedback</label>
                        <select
                            ref={ref}
                            name="category"
                            id="category"
                            defaultValue={category}
                            onChange={handleInputChange}
                        >
                            <option value="All">All</option>
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="Bug">Bug</option>
                            <option value="Feature">Feature</option>
                        </select>

                        <h4>Update Status</h4>
                        <label htmlFor="status">Change feedback status</label>
                        <select
                            ref={ref}
                            name="status"
                            id="status"
                            defaultValue={status}
                            onChange={handleInputChange}
                        >
                            <option value="Suggestion">Suggestion</option>
                            <option value="Planned">Planned</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Live">Live</option>
                        </select>

                        <h4>Change a feedback detail</h4>
                        <label htmlFor="detail">Include any specific comments on what should be improved, added, etc.</label>
                        <textarea
                            ref={ref}
                            name="detail"
                            id="detail"
                            defaultValue={detail}
                            onChange={handleInputChange}

                        />
                        <EditFeedbackButtonsContainer>
                            <EditFeedbackButtonDelete
                            // onClick={deleteFeedback}
                            >
                                Delete
                            </EditFeedbackButtonDelete>

                            <EditFeedbackButtonCancel onClick={cancelAddFeedback}>Cancel</EditFeedbackButtonCancel>
                            <EditFeedbackButtonAdd
                                onClick={editFeedback}
                            >Edit Feedback</EditFeedbackButtonAdd>
                        </EditFeedbackButtonsContainer>
                    </EditFeedbackFormContainer>



                </EditFeedbackInnerContainer>
            </EditFeedbackWholeContainer>
        </EditFeedbackContainer >
    )
}
*/