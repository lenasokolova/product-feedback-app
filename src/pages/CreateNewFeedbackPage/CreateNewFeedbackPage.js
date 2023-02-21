import React from "react";
import styled from "styled-components";
import useCreateNewFeedbackPage from "./useCreateNewFeedbackPage";
import Navbar from "./../../components/Navbar/Navbar";
import FeedbackForm from "./../../components/FeedbackForm/FeedbackForm";

const CreateNewFeedbackPage = () => {
	const {
		title,
		category,
		detail,
		handleInputChange,
		handleSubmit,
		cancelAddFeedback,
	} = useCreateNewFeedbackPage();

	return (
		<NewFeedbackContainer>
			<Navbar />
			<FeedbackForm
				formName="Create new feedback"
				valueTitle={title}
				valueCategory={category}
				valueDetail={detail}
				onSubmit={handleSubmit}
				onCancel={cancelAddFeedback}
				onChange={handleInputChange}
			/>
		</NewFeedbackContainer>
	);
};

export default CreateNewFeedbackPage;

const NewFeedbackContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
`;
