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
                    <RoadmapCardsInfo>
                        <h5>Planned (2)</h5>
                        <h6>Ideas prioritized for research</h6>
                    </RoadmapCardsInfo>
                    <RoadmapFeedCard />
                    <RoadmapFeedCard />

                </RoadmapCardsPlanned>
                <RoadmapCardsInProgress>
                    <RoadmapCardsInfo>
                        <h5>In-progress (3)</h5>
                        <h6>Currently being developed</h6>

                    </RoadmapCardsInfo>

                    <RoadmapFeedCard />
                    <RoadmapFeedCard />
                    <RoadmapFeedCard />

                </RoadmapCardsInProgress>
                <RoadmapCardsLive>
                    <RoadmapCardsInfo>
                        <h5>Live (1)</h5>
                        <h6>Released features</h6>
                    </RoadmapCardsInfo>

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

const RoadmapCardsInfo = styled.div`

    margin: 20px 0px 20px;

    >h5 {
        font-size: 14px;
    }

    >h6 {
        font-size: 12px;
        font-weight: 500; 
    }
`;


const RoadmapCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const RoadmapCardsPlanned = styled.div``;

const RoadmapCardsInProgress = styled.div``;

const RoadmapCardsLive = styled.div``;

