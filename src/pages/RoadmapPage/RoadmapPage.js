import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import useRoadmapPage from "./useRoadmapPage";
import {
	RoadmapCardsContainer,
	RoadmapCardsInfo,
	RoadmapPageContainer,
} from "./RoadmapPage.styles";

const RoadmapPage = () => {
	const { planned, inProgress, live } = useRoadmapPage();

	return (
		<RoadmapPageContainer>
			<Navbar />
			section
			<RoadmapCardsContainer>
				<section>
					<RoadmapCardsInfo>
						<h5>Planned ({planned?.length})</h5>
						<h6>Ideas prioritized for research</h6>
					</RoadmapCardsInfo>
					{planned}
				</section>
				<section>
					<RoadmapCardsInfo>
						<h5>In-progress ({inProgress?.length})</h5>
						<h6>Currently being developed</h6>
					</RoadmapCardsInfo>
					{inProgress}
				</section>
				<section>
					<RoadmapCardsInfo>
						<h5>Live ({live?.length})</h5>
						<h6>Released features</h6>
					</RoadmapCardsInfo>
					{live}
				</section>
			</RoadmapCardsContainer>
		</RoadmapPageContainer>
	);
};

export default RoadmapPage;
