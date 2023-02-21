import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import {
	CommentBody,
	CommentContainer,
	CommentInfo,
	CommentInfoLeft,
	CommentText,
} from "./Comment.styles";

const Comment = () => {
	const { id } = useParams();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const commentRef = doc(db, "feedbacks", id);
		onSnapshot(commentRef, (snapshot) => {
			setComments(snapshot.data().comments);
		});
	}, []);

	return (
		<>
			{comments &&
				comments.map(({ content, commentId, createdBy, photo }) => (
					<CommentContainer key={commentId}>
						<img
							src={photo}
							alt="user avatar"
						/>
						<CommentBody>
							<CommentInfo>
								<CommentInfoLeft>
									<h4>{createdBy}</h4>
									<span>@{createdBy}</span>
								</CommentInfoLeft>
							</CommentInfo>
							<CommentText>{content}</CommentText>
						</CommentBody>
					</CommentContainer>
				))}
		</>
	);
};

export default Comment;
