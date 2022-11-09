import React from 'react';
import styled from 'styled-components';
import Thread from './Thread';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AddCommentSection from './AddCommentSection';
import Comment from './Comment';

const ThreadPage = () => {
    return (
        <ThreadPageContainer>
            <ThreadNav>
                <ThreadNavLeft>
                    <NavigateBeforeIcon />
                    <p>Go Back</p>
                </ThreadNavLeft>
                <ThreadNavRight>
                    <button>Edit Feedback</button>
                </ThreadNavRight>


            </ThreadNav>
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

const ThreadNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

const ThreadNavLeft = styled.div`
    display: flex;
    align-items: center;

    >.MuiSvgIcon-root {
        font-size: 20px;
        color: #4661e6;
    }

    >p {
        font-size: 12px;
        font-weight: 800;
        color: #72799d;
    }

`;

const ThreadNavRight = styled.div`
    display: flex;

    >button {
        display: flex;
        align-items: center;
        background-color: #4661e6;
        border: none;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 25px;
        border-radius: 10px;
        cursor: pointer;

        :hover {
            background-color: #3b55d4;

        }
    }
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


