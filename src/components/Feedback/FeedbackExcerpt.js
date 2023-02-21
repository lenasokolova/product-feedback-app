import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import {
	FeedbackCategoryDiv,
	FeedbackCommentsDiv,
	FeedbackContainerDiv,
	FeedbackContentDiv,
	FeedbackInfoDiv,
	FeedbackLeftDiv,
	FeedbackRightDiv,
	FeedbackVotesDiv,
} from "./FeedbackExcerpt.styles";
import { CustomFeedBtn } from "./CustomFeedBtn";

const FeedbackExcerpt = ({
	onClick,
	id,
	title,
	category,
	detail,
	comments,
	upVotesCount,
	createdBy,
}) => {
	return (
		<FeedbackContainerDiv id={id}>
			<FeedbackLeftDiv>
				<FeedbackVotesDiv>
					<ExpandLessIcon />
					<h4>{upVotesCount}</h4>
				</FeedbackVotesDiv>
				<FeedbackContentDiv>
					<FeedbackInfoDiv>
						<h3>{title}</h3>
						<span>
							{" "}
							<PersonIcon />
							{createdBy}
						</span>
						<p>{detail}</p>
					</FeedbackInfoDiv>
					<FeedbackCategoryDiv>
						<p>{category}</p>
					</FeedbackCategoryDiv>
				</FeedbackContentDiv>
			</FeedbackLeftDiv>

			<FeedbackRightDiv>
				<FeedbackCommentsDiv>
					<ChatBubbleIcon />
					<h3>{comments}</h3>
				</FeedbackCommentsDiv>
				<CustomFeedBtn
					onClick={onClick}
					title="Open feedback"
				/>
			</FeedbackRightDiv>
		</FeedbackContainerDiv>
	);
};

export default FeedbackExcerpt;
