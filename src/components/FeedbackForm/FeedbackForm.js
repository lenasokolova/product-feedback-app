import React from "react";
import { useLocation, useParams } from "react-router-dom";
import routes from "../../routes/routes";
import { CustomFeedBtn } from "../Feedback/CustomFeedBtn";
import { FeedBtnDiv, FeedForm, FeedbackDiv } from "./FeedbackForm.styles";

const FeedbackForm = ({
	formName,
	valueTitle,
	valueCategory,
	valueStatus,
	valueDetail,
	defaultValue,
	onCancel,
	onChange,
	onDelete,
	onSubmit,
}) => {
	let location = useLocation();
	const { id } = useParams();

	return (
		<FeedbackDiv>
			<h2>{formName}</h2>
			<FeedForm onSubmit={onSubmit}>
				<h3>Feedback Title</h3>
				<label htmlFor="title">Add a short, descriptive headline</label>
				<input
					type="text"
					name="title"
					value={valueTitle}
					onChange={onChange}
					placeholder="Short description..."
				/>

				<h3>Category</h3>
				<label htmlFor="category">Choose a category for your feedback</label>
				<select
					name="category"
					id="category"
					value={valueCategory}
					onChange={onChange}
				>
					<option value="No category">No category</option>
					<option value="UI">UI</option>
					<option value="UX">UX</option>
					<option value="Enhancement">Enhancement</option>
					<option value="Bug">Bug</option>
					<option value="Feature">Feature</option>
				</select>

				{location.pathname ===
					`${routes.REACT_APP_EDIT_FEEDBACK_PATH}${id}` && (
					<>
						<h3>Update Status</h3>
						<label htmlFor="status">Change feedback status</label>
						<select
							name="status"
							id="status"
							value={valueStatus}
							defaultValue={defaultValue}
							onChange={onChange}
						>
							<option value="Suggestion">Suggestion</option>
							<option value="Planned">Planned</option>
							<option value="In-Progress">In-Progress</option>
							<option value="Live">Live</option>
						</select>{" "}
					</>
				)}

				<h3>Feedback detail</h3>
				<label htmlFor="detail">
					Include any specific comments on what should be improved, added, etc.
				</label>
				<textarea
					name="detail"
					id="detail"
					value={valueDetail}
					onChange={onChange}
					placeholder="Detailed description..."
				/>
				<FeedBtnDiv>
					<CustomFeedBtn
						title="Cancel"
						type="button"
						onClick={onCancel}
						background="cancel"
					/>

					{location.pathname ===
						`${routes.REACT_APP_EDIT_FEEDBACK_PATH}${id}` && (
						<CustomFeedBtn
							type="button"
							title="Delete"
							onClick={onDelete}
							background="delete"
						/>
					)}

					<CustomFeedBtn
						title={
							location.pathname === routes.REACT_APP_ADD_FEEDBACK_PATH
								? "Create Feedback"
								: "Edit Feedback"
						}
						type="submit"
					/>
				</FeedBtnDiv>
			</FeedForm>
		</FeedbackDiv>
	);
};

export default FeedbackForm;
