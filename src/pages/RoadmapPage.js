import React, { useEffect } from 'react'
import styled from 'styled-components';

import NavabarRoadmap from '../components/NavabarRoadmap'
import RoadmapFeedCard from '../components/RoadmapFeedCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFeedbacks } from './../redux/actions';

const RoadmapPage = () => {

    const navigate = useNavigate();

    const { feedbacks } = useSelector(state => state.data)

    const feedbacksPlanned = feedbacks.filter(function (feedback) {
        return feedback.status === 'Planned'
    }).map(({ id, status, title, category, detail, comments, upVotesCount }) => (
        <RoadmapFeedCard
            key={id}
            onClick={() => navigate(`/feedback/${id}`)}
            status={status}
            title={title}
            category={category}
            detail={detail}
            comments={comments?.length}
            upVotesCount={upVotesCount?.length}
        />
    ))




    const feedbacksInProgress = feedbacks.filter(function (feedback) {
        return feedback.status === 'In-Progress'
    }).map(({ id, status, title, category, detail, comments, upVotesCount }) => (
        <RoadmapFeedCard
            key={id}
            onClick={() => navigate(`/feedback/${id}`)}
            status={status}
            title={title}
            category={category}
            detail={detail}
            comments={comments?.length}
            upVotesCount={upVotesCount?.length}
        />
    ))


    const feedbacksLive = feedbacks.filter(function (feedback) {
        return feedback.status === 'Live'
    }).map(({ id, status, title, category, detail, comments, upVotesCount }) => (
        <RoadmapFeedCard
            key={id}
            onClick={() => navigate(`/feedback/${id}`)}
            status={status}
            title={title}
            category={category}
            detail={detail}
            comments={comments?.length}
            upVotesCount={upVotesCount?.length}
        />
    ))



    return (
        <RoadmapPageContainer>
            <NavabarRoadmap />
            <RoadmapCardsContainer>
                <RoadmapCardsPlanned>
                    <RoadmapCardsInfo>
                        <h5>Planned ({feedbacksPlanned.length})</h5>
                        <h6>Ideas prioritized for research</h6>
                    </RoadmapCardsInfo>
                    {feedbacksPlanned}

                </RoadmapCardsPlanned>
                <RoadmapCardsInProgress>
                    <RoadmapCardsInfo>
                        <h5>In-progress ({feedbacksInProgress.length})</h5>
                        <h6>Currently being developed</h6>

                    </RoadmapCardsInfo>
                    {feedbacksInProgress}


                </RoadmapCardsInProgress>
                <RoadmapCardsLive>
                    <RoadmapCardsInfo>
                        <h5>Live ({feedbacksLive.length})</h5>
                        <h6>Released features</h6>
                    </RoadmapCardsInfo>
                    {feedbacksLive}

                </RoadmapCardsLive>

            </RoadmapCardsContainer>

        </RoadmapPageContainer>
    )
}

export default RoadmapPage;


const RoadmapPageContainer = styled.div`
    max-width: 800px;
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

