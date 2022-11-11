import React from 'react';
import styled from 'styled-components';
import NavbarFeedback from './NavbarFeedback';

const CreateNewFeedback = () => {
    return (
        <NewFeedbackContainer>
            <NewFeedbackWholeContainer>
                <NavbarFeedback />
                <NewFeedbackInnerContainer>
                    <h2>Create New Feedback</h2>
                    <NewFeedbackFormContainer>
                        <h4>Feedback Title</h4>
                        <label htmlFor="headline">Add a short, descriptive headline</label>
                        <input type="text" name='headline' />

                        <h4>Category</h4>
                        <label htmlFor="categories">Choose a category for your feedback</label>
                        <select name="categories" id="categories">
                            <option value="all">All</option>
                            <option value="uI">UI</option>
                            <option value="uX">UX</option>
                            <option value="enhancement">Enhancement</option>
                            <option value="bug">Bug</option>
                            <option value="feature">Feature</option>
                        </select>

                        <h4>Feedback Detail</h4>
                        <label htmlFor="details">Include any specific comments on what should be improved, added, etc.</label>
                        <textarea name="details" id="details"></textarea>
                    </NewFeedbackFormContainer>

                    <NewFeedbackButtonsContainer>
                        <NewFeedbackButtonCancel>Cancel</NewFeedbackButtonCancel>
                        <NewFeedbackButtonAdd>Add Feedback</NewFeedbackButtonAdd>
                    </NewFeedbackButtonsContainer>

                </NewFeedbackInnerContainer>
            </NewFeedbackWholeContainer>
        </NewFeedbackContainer>
    )
}

export default CreateNewFeedback


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

