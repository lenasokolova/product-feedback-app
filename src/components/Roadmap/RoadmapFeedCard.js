import React from "react";
import SidebarStatOption from "../Sidebar/SidebarStatOption";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { CustomFeedBtn } from "../Feedback/CustomFeedBtn";

import {
	FeedCardBody,
	FeedCardBottom,
	FeedCardCategoryDiv,
	FeedCardContainer,
	FeedCardTop,
	ThreadComments,
	ThreadVotes,
} from "./RoadmapFeedCard.styles";

const RoadmapFeedCard = ({
	onClick,
	title,
	category,
	detail,
	comments,
	upVotesCount,
	status,
	color,
}) => {
	return (
		<FeedCardContainer>
			<FeedCardTop>
				<SidebarStatOption
					Icon={FiberManualRecordIcon}
					title={status}
					color={color}
				/>
			</FeedCardTop>

			<FeedCardBody>
				<h4>{title}</h4>
				<p>{detail}</p>
				<FeedCardCategoryDiv>
					<p>{category}</p>
				</FeedCardCategoryDiv>
			</FeedCardBody>

			<FeedCardBottom>
				<ThreadVotes>
					<ExpandLessIcon />
					<h4>{upVotesCount}</h4>
				</ThreadVotes>
				<ThreadComments>
					<ChatBubbleIcon />
					<h3>{comments}</h3>
				</ThreadComments>
			</FeedCardBottom>
			<CustomFeedBtn
				onClick={onClick}
				title="Open feedback"
			/>
		</FeedCardContainer>
	);
};

export default RoadmapFeedCard;
