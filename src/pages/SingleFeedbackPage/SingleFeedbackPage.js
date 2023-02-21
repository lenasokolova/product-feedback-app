import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";

import AddCommentSection from "../../components/AddCommentSection/AddCommentSection";
import Comment from "../../components/Comment/Comment";
import { getSingleFeedback } from "../../redux/actions";
import {
	SingleThreadPageContainer,
	SingleThreadPageContainerWhole,
	ThreadCategory,
	ThreadComments,
	ThreadContainer,
	ThreadContent,
	ThreadInfo,
	ThreadLeft,
	ThreadRight,
	ThreadVotes,
} from "./SingleFeedbackPage.styles";
import Navbar from "../../components/Navbar/Navbar";

const SingleFeedbackPage = () => {
	const { feedback } = useSelector((state) => state.data);
	const { category, detail, title, upVotesCount, comments, createdBy } =
		feedback;

	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSingleFeedback(id));
	}, []);

	return (
		<SingleThreadPageContainer>
			<Navbar />

			<SingleThreadPageContainerWhole>
				<ThreadContainer>
					<ThreadLeft>
						<ThreadVotes>
							<ExpandLessIcon />
							<h4>{upVotesCount?.length}</h4>
						</ThreadVotes>
						<ThreadContent>
							<ThreadInfo>
								<h3>{title}</h3>
								<span>
									{" "}
									<PersonIcon />
									{createdBy}
								</span>
								<p>{detail}</p>
							</ThreadInfo>
							<ThreadCategory>
								<p>{category}</p>
							</ThreadCategory>
						</ThreadContent>
					</ThreadLeft>

					<ThreadRight>
						<ThreadComments>
							<ChatBubbleIcon />
							<h3>{comments?.length}</h3>
						</ThreadComments>
					</ThreadRight>
				</ThreadContainer>
				<Comment />
				<AddCommentSection />
			</SingleThreadPageContainerWhole>
		</SingleThreadPageContainer>
	);
};

export default SingleFeedbackPage;
