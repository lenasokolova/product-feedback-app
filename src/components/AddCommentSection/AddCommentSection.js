import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AddCommentContainer } from "./AddCommentSection.styles";

import { useDispatch } from "react-redux";
import { addCommentToFeedback } from "./../../redux/actions";

const AddCommentSection = () => {
	const { id } = useParams();
	const [user] = useAuthState(auth);
	const dispatch = useDispatch();

	const [comment, setComment] = useState("");

	const handleCommentSubmit = (e) => {
		e.preventDefault();
		dispatch(addCommentToFeedback(id, user, comment));
		setComment({ comment: "" });
	};

	return (
		<AddCommentContainer>
			<h3>Add Comment</h3>
			<form>
				<textarea
					name="comment"
					id="comment"
					value={comment.content}
					onChange={(e) => {
						setComment(e.target.value);
					}}
					placeholder="Type your comment here"
				/>
			</form>
			<div>
				<span>250 Characters left</span>
				<button onClick={handleCommentSubmit}>Post comment</button>
			</div>
		</AddCommentContainer>
	);
};

export default AddCommentSection;
