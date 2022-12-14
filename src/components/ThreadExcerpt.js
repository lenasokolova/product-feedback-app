import React from 'react'
import styled from 'styled-components';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
import { SidebarOption } from './Sidebar';

const ThreadExcerpt = ({ onClick, id, title, category, detail, comments, upVotesCount, createdBy }) => {

    return (
        <ThreadContainer
            onClick={onClick}
            id={id}>
            <ThreadLeft>
                <ThreadVotes>
                    <ExpandLessIcon />
                    <h4>{upVotesCount}</h4>
                </ThreadVotes>
                <ThreadContent>
                    <ThreadInfo>
                        <h3>{title}</h3>
                        <span> <PersonIcon />{createdBy}</span>
                        <p>{detail}</p>
                    </ThreadInfo>
                    <ThreadCategory>
                        <SidebarOption>{category}</SidebarOption>
                    </ThreadCategory>
                </ThreadContent>
            </ThreadLeft>

            <ThreadRight>
                <ThreadComments>
                    <ChatBubbleIcon />
                    <h3>{comments}</h3>
                </ThreadComments>
            </ThreadRight>


        </ThreadContainer>
    )
}

export default ThreadExcerpt;

const ThreadContainer = styled.div`
    display: flex;
    background-color: #fff;
    padding: 25px;
    margin-bottom: 18px;
    border-radius: 10px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
`;

const ThreadLeft = styled.div`
    display: flex;
    align-items: flex-start;
`;

const ThreadVotes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f4ff;
    padding: 6px 8px;
    border-radius: 10px;
    margin-right: 35px;
    cursor: pointer;

    >.MuiSvgIcon-root {
        font-size: 20px;
        color: #4661e6;
    }

    >h4 {
        font-size: 13px;
        font-weight: 900;
        margin-bottom: 2px;
    }
`;

const ThreadContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const ThreadInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;


    >h3 {
        font-weight: 900;
        font-size: 17px;
        margin-bottom: 6px;
    }

    >p {
        font-weight: 500;
        font-size: 14px;
        color: #464d7b;
    }

    >span {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 6px;

        >.MuiSvgIcon-root {
            font-size: 15px;
            margin-right: 7px;
        }
    }
`;

const ThreadCategory = styled.div`
    display: flex;
`;

const ThreadRight = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
`;

const ThreadComments = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    >.MuiSvgIcon-root {
        font-size: 20px;
        color: #ced3f0;
        margin-right: 8px;
    }

    >h3 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 3px;
    }
`;

