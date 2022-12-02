import React from 'react';
import styled from 'styled-components';
import SidebarStatOption from './SidebarStatOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { SidebarOption } from './Sidebar';

const RoadmapFeedCard = ({ onClick, id, title, category, detail, comments, upVotesCount, status }) => {
    return (
        <FeedCardContainer onClick={onClick} id={id}>
            <FeedCardTop>
                <SidebarStatOption Icon={FiberManualRecordIcon} title={status} color='#efa08c' />
            </FeedCardTop>

            <FeedCardBody>
                <h4>{title}</h4>
                <p>{detail}</p>
                <SidebarOption>{category}</SidebarOption>
            </FeedCardBody>


            <FeedCardBottom>
                <ThreadVotes>
                    <ExpandLessIcon />
                    <h4>{upVotesCount}</h4>
                </ThreadVotes>
                <ThreadComments>
                    <ChatBubbleIcon />
                    <h3>{comments}</h3>
                </ThreadComments>
            </FeedCardBottom>

        </FeedCardContainer>
    )
}

export default RoadmapFeedCard;


const FeedCardContainer = styled.div`
    width: 240px;
    max-width: 240px;
    min-width: 200px;
    border-radius: 10px;
    background-color: #fff;
    padding: 25px;
    border-top: 5px solid #efa08c ;
    margin-bottom: 20px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    
`;



const FeedCardBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FeedCardTop = styled.div``;

const FeedCardBody = styled.div`
    width: 100%;

    >h4 {
        font-size: 14px;
        margin-bottom: 15px;
    }

    >p {
        font-size: 12px;
        margin-bottom: 15px;
        word-wrap: break-word;
        
    }
`;


const ThreadVotes = styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f4ff;
    padding: 6px 8px;
    border-radius: 10px;
    margin-right: 35px;
    margin-top: 15px;

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

const ThreadComments = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
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