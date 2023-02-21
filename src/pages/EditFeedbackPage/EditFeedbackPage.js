import React from "react";
import styled from "styled-components";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import Navbar from "../../components/Navbar/Navbar";
import useEditFeedbackPage from "./useEditFeedbackPage";

const EditFeedbackPage = () => {
	const {
		title,
		category,
		detail,
		status,
		deleteFeedback,
		editFeedback,
		handleInputChange,
		cancelAddFeedback,
	} = useEditFeedbackPage();

	return (
		<EditFeedbackContainer>
			<Navbar />
			<FeedbackForm
				formName="Edit your feedback"
				valueTitle={title}
				valueCategory={category}
				valueDetail={detail}
				valueStatus={status}
				onSubmit={editFeedback}
				onCancel={cancelAddFeedback}
				onChange={handleInputChange}
				onDelete={deleteFeedback}
			/>
		</EditFeedbackContainer>
	);
};

export default EditFeedbackPage;

const EditFeedbackContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
`;
