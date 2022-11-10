import React from 'react';
import styled from 'styled-components';
import Thread from './Thread';
import AddCommentSection from './AddCommentSection';
import Comment from './Comment';
import NavbarFeedback from './NavbarFeedback';

const ThreadPage = () => {
    return (
        <ThreadPageContainer>
            <NavbarFeedback />
            <Thread />
            <ThreadComments>
                <h3>4 Comments</h3>
                <Comment />
            </ThreadComments>
            <ThreadAddComments>
                <AddCommentSection />
            </ThreadAddComments>
        </ThreadPageContainer>
    )
}

export default ThreadPage


const ThreadPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
`;



const ThreadComments = styled.div`
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
`;

const ThreadAddComments = styled.div``;


