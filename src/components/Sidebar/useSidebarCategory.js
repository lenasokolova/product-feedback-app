import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FeedbackExcerpt from "../Feedback/FeedbackExcerpt";

const useSidebarCategory = () => {
	const { feedbacks } = useSelector((state) => state.data);
	const navigate = useNavigate();

	const cat = (feedbacks) => {
		return feedbacks?.reduce(
			(acc, cur) => {
				if (cur.category === "UI") return { ...acc, ui: [...acc.ui, cur] };
				if (cur.category === "UX") return { ...acc, ux: [...acc.ux, cur] };
				if (cur.category === "Enhancement")
					return { ...acc, enhancement: [...acc.enhancement, cur] };
				if (cur.category === "Bug") return { ...acc, bug: [...acc.bug, cur] };
				if (cur.category === "Feature")
					return { ...acc, feature: [...acc.feature, cur] };
				return { ...acc, noCategory: [...acc.noCategory, cur] };
			},
			{ ui: [], ux: [], enhancement: [], bug: [], feature: [], noCategory: [] }
		);
	};

	const sortByCategory = cat(feedbacks);

	const newCategory = (category) => {
		const newCat = sortByCategory[category];
		const newFeeds = newCat.map(
			({ id, title, category, detail, comments, upVotesCount, createdBy }) => (
				<div key={id}>
					<FeedbackExcerpt
						onClick={() => navigate(`/feedback/${id}`)}
						title={title}
						category={category}
						detail={detail}
						comments={comments?.length}
						upVotesCount={upVotesCount?.length}
						createdBy={createdBy}
					/>
				</div>
			)
		);
		console.log(newFeeds);
		return newFeeds;
	};

	const uiCount = sortByCategory.ui.length;
	const uxCount = sortByCategory.ux.length;
	const enhancementCount = sortByCategory.enhancement.length;
	const bugCount = sortByCategory.bug.length;
	const featureCount = sortByCategory.feature.length;
	const noCategoryCount = sortByCategory.noCategory.length;

	return {
		sortByCategory,
		newCategory,
		featureCount,
		uiCount,
		uxCount,
		enhancementCount,
		bugCount,
		noCategoryCount,
	};
};

export default useSidebarCategory;
