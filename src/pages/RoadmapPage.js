import React from 'react'
import styled from 'styled-components';

import NavabarRoadmap from '../components/NavabarRoadmap'
import RoadmapFeedCard from '../components/RoadmapFeedCard'

const RoadmapPage = () => {
    return (
        <RoadmapPageContainer>
            <NavabarRoadmap />
            <RoadmapCardsContainer>
                <RoadmapCardsPlanned>
                    <RoadmapFeedCard />
                    <RoadmapFeedCard />

                </RoadmapCardsPlanned>
                <RoadmapCardsInProgress>
                    <RoadmapFeedCard />
                    <RoadmapFeedCard />
                    <RoadmapFeedCard />

                </RoadmapCardsInProgress>
                <RoadmapCardsLive>
                    <RoadmapFeedCard />

                </RoadmapCardsLive>

            </RoadmapCardsContainer>

        </RoadmapPageContainer>
    )
}

export default RoadmapPage;


const RoadmapPageContainer = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
`;

const RoadmapCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const RoadmapCardsPlanned = styled.div``;

const RoadmapCardsInProgress = styled.div``;

const RoadmapCardsLive = styled.div``;

