import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { STYLES } from "../../variables/styleVariables";
import RoadmapFeedCard from "./../../components/Roadmap/RoadmapFeedCard";

const useRoadmapPage = () => {
	const { feedbacks } = useSelector((state) => state.data);
	const navigate = useNavigate();

	const red = (feedbacks) => {
		return feedbacks?.reduce(
			(acc, cur) => {
				if (cur.status === "Planned")
					return { ...acc, planned: [...acc.planned, cur] };
				if (cur.status === "In-Progress")
					return { ...acc, inProgress: [...acc.inProgress, cur] };
				return { ...acc, live: [...acc.live, cur] };
			},
			{ planned: [], inProgress: [], live: [] }
		);
	};

	const sortedFeeds = red(feedbacks);

	const inProgress = sortedFeeds.inProgress.map(
		({ id, status, title, category, detail, comments, upVotesCount }) => (
			<RoadmapFeedCard
				key={id}
				onClick={() => navigate(`/feedback/${id}`)}
				status={status}
				title={title}
				category={category}
				detail={detail}
				comments={comments?.length}
				upVotesCount={upVotesCount?.length}
				color={STYLES.statusInProgress}
			/>
		)
	);

	const planned = sortedFeeds.planned.map(
		({ id, status, title, category, detail, comments, upVotesCount }) => (
			<RoadmapFeedCard
				key={id}
				onClick={() => navigate(`/feedback/${id}`)}
				status={status}
				title={title}
				category={category}
				detail={detail}
				comments={comments?.length}
				upVotesCount={upVotesCount?.length}
				color={STYLES.statusPlanned}
			/>
		)
	);

	const live = sortedFeeds.live.map(
		({ id, status, title, category, detail, comments, upVotesCount }) => (
			<RoadmapFeedCard
				key={id}
				onClick={() => navigate(`/feedback/${id}`)}
				status={status}
				title={title}
				category={category}
				detail={detail}
				comments={comments?.length}
				upVotesCount={upVotesCount?.length}
				color={STYLES.statusLive}
			/>
		)
	);

	return { inProgress, live, planned, sortedFeeds };
};

export default useRoadmapPage;
