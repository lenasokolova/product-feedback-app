import React from 'react';
import styled from 'styled-components';
import SidebarStatOption from './SidebarStatOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { SidebarOption } from './Sidebar';

const RoadmapFeedCard = () => {
    return (
        <FeedCardContainer>
            <SidebarStatOption Icon={FiberManualRecordIcon} title='Planned' color='#efa08c' />
            <h4>More comprehensive reports</h4>
            <p>Lorem ipsum lalala ipsum lalala ipsum lalala ipsum lalala</p>
            <SidebarOption>Feature</SidebarOption>
        </FeedCardContainer>
    )
}

export default RoadmapFeedCard;


const FeedCardContainer = styled.div`
    max-width: 220px;
    min-width: 200px;
    border-radius: 10px;
    background-color: lightgrey;
    padding: 60px 18px 18px;
    
`;