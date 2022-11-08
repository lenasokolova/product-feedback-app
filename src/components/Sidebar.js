import { Icon } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SidebarStatOption from './SidebarStatOption';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <h3>Frontend Mentor</h3>
                <p>Feedback Board</p>
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
                    <span>View</span>
                </SidebarStatsHeader>
                <SidebarStatsBody>
                    <SidebarStatOption Icon={FiberManualRecordIcon} title='Planned' number={2} color='#efa08c' /><SidebarStatOption Icon={FiberManualRecordIcon} title='In-progress' number={3} color='#ae1feb' />
                    <SidebarStatOption Icon={FiberManualRecordIcon} title='Live' number={1} color='#71b2f7' />
                </SidebarStatsBody>


            </SidebarStatsContainer>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    flex: 0.3;
    max-width: 260px;
    border: 1px solid red;
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
    padding: 18px 18px 5px;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;


    -webkit-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    -moz-box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);
    box-shadow: 4px 10px 24px -13px rgba(154, 154, 210, 1);

`;

const SidebarOption = styled.span`
    font-size: 12px;
    font-weight: 900;
    color: #4661e6;
    background-color: #f2f4ff;
    padding: 10px 18px;
    margin-bottom: 15px;
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

const SidebarStatsBody = styled.div``;
