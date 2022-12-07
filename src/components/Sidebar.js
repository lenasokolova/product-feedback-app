import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SidebarStatOption from './SidebarStatOption';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';


const Sidebar = () => {

    const [user] = useAuthState(auth)
    console.log("this is user =>", user)

    const navigate = useNavigate()

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

    const toRegisterPage = () => {
        signOut(auth);
        navigate('/login')

    }

    return (
        <SidebarContainer>
            <SidebarHeader>
                <h3>Frontend Mentor</h3>
                <p>Feedback Board</p>
                {user ? (
                    <>
                        <StyledSpan>Signed in as </StyledSpan>
                        <StyledDiv onClick={() => toRegisterPage()}>
                            <StyledImg src={user.photoURL} />
                            <p>{user.displayName || user.email}</p>
                        </StyledDiv>
                    </>
                ) : (
                    <>
                        <NoUserH2>Not a user?</NoUserH2>
                        <NoUserDiv>
                            <h2>Please <br /><StyledLink to={"/login"}>login</StyledLink> or <StyledLink to={"/register"}>register</StyledLink></h2>
                        </NoUserDiv>

                    </>
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
    padding: 18px;
    margin-bottom: 20px;

    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

    > h3 {
        font-size: 20px;
        font-weight: 700;
    }

    > p {
        font-size: 13px;
        font-weight: 200;
        margin-top: 5px;
    }

`;

const StyledSpan = styled.span`
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    :hover {
        background: rgb(153,0,255);
        background: linear-gradient(90deg, rgba(153,0,255,0.48783263305322133) 0%, rgba(255,255,255,0.6699054621848739) 100%);
    }
`;

const NoUserH2 = styled.h2`
    margin-top: 15px;
    
`;


const NoUserDiv = styled.div`
    background: rgba(55,62,104, 0.6);
    padding: 10px; 
    border-radius: 9px;
    margin-top: 8px;   

    >h2 {
        font-weight: 300;
    }
`;

const StyledImg = styled.img`
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 10px;
`;

const StyledLink = styled(Link)`
    color: #fff;
    font-weight: 700;
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
