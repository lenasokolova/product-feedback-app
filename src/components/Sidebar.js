import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SidebarStatOption from './SidebarStatOption';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase';


const Sidebar = () => {

    const [user] = useAuthState(auth)
    console.log("this is user =>", user)

    const { feedbacks } = useSelector(state => state.data);

    const feedbacksPlanned = feedbacks.filter(function (feedback) {
        return feedback.status === 'Planned'
    });

    const feedbacksInProgress = feedbacks.filter(function (feedback) {
        return feedback.status === 'In-Progress'
    });

    const feedbacksLive = feedbacks.filter(function (feedback) {
        return feedback.status === 'Live'
    })

    return (
        <SidebarContainer>
            <SidebarHeader>
                <h3>Frontend Mentor</h3>
                <p>Feedback Board</p>
                {user && (
                    <span>Signed in as {user.displayName || user.email}</span>
                )}
            </SidebarHeader>
            <SidebarOptionContainer>
                <SidebarOption>All</SidebarOption>
                <SidebarOption>UI</SidebarOption>
                <SidebarOption>UX</SidebarOption>
                <SidebarOption>Enchancement</SidebarOption>
                <SidebarOption>Bug</SidebarOption>
                <SidebarOption>Feature</SidebarOption>
            </SidebarOptionContainer>
            <SidebarStatsContainer>
                <SidebarStatsHeader>
                    <h3>Roadmap</h3>
                    <Link to={"/roadmap"}><span>View</span></Link>
                </SidebarStatsHeader>
                <SidebarStatsBody>
                    <SidebarStatOption Icon={FiberManualRecordIcon} title={'Planned'} number={feedbacksPlanned.length} color='#efa08c' />
                    <SidebarStatOption Icon={FiberManualRecordIcon} title='In-progress' number={feedbacksInProgress.length} color='#ae1feb' />
                    <SidebarStatOption Icon={FiberManualRecordIcon} title='Live' number={feedbacksLive.length} color='#71b2f7' />
                </SidebarStatsBody>


            </SidebarStatsContainer>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.3;
    max-width: 240px;
    min-width: 200px;
    margin-right: 20px;
`;

const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(113, 178, 247, 1);
    background-image: linear-gradient(156deg, rgba(113, 178, 247, 1) 12%, rgba(156, 76, 244, 1) 31%, rgba(183, 65, 206, 1) 76%, rgba(239, 160, 140, 1) 100%);
    border-radius: 10px;
    color: #fff;
    padding: 60px 18px 18px;
    margin-bottom: 20px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

    > h3 {
        font-size: 17px;
        font-weight: 700;
    }

    > p {
        font-size: 12px;
        font-weight: 200;
        margin-top: 5px;
    }
`;

const SidebarOptionContainer = styled.div`
    display: flex;
    gap: 10px 0px;
    padding: 18px;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;


    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

`;

export const SidebarOption = styled.div`
    font-size: 12px;
    font-weight: 900;
    color: #4661e6;
    background-color: #f2f4ff;
    padding: 10px 18px;
    /* margin-bottom: 15px; */
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        color: #f2f4ff;
        background-color: #4661e6;
    }
`;


const SidebarStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px;
    background-color: #fff;
    border-radius: 10px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
`;


const SidebarStatsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;


    >h3 {
        font-weight: 900;
        font-size: 17px;
        color: #464d7b;
    }

    >span {
        font-size: 12px;
        text-decoration: underline;
        color: #4661e6;
        font-weight: 900;
        cursor: pointer;

    }
`;

const SidebarStatsBody = styled.div`
`;
