import React, { useEffect } from "react";
import styled from "styled-components";
import FeedbackExcerpt from "./FeedbackExcerpt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFeedbacks } from "../../redux/actions";

const FeedbackList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { feedbacks } = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(getFeedbacks());
	}, []);

	return (
		<FeedbackListContainer>
			{feedbacks &&
				feedbacks.map((item, index) => (
					<div key={index}>
						<FeedbackExcerpt
							onClick={() => navigate(`/feedback/${item.id}`)}
							title={item.title}
							category={item.category}
							detail={item.detail}
							comments={item.comments?.length}
							upVotesCount={item.upVotesCount?.length}
							createdBy={item.createdBy}
						/>
					</div>
				))}
		</FeedbackListContainer>
	);
};

export default FeedbackList;

const FeedbackListContainer = styled.div`
	height: 100vh;
`;
