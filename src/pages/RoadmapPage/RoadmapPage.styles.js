import styled from "styled-components";

export const RoadmapPageContainer = styled.section`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	margin: 30px auto;
`;

export const RoadmapCardsInfo = styled.section`
	margin: 20px 0px 20px;

	> h5 {
		font-size: 14px;
	}

	> h6 {
		font-size: 12px;
		font-weight: 500;
	}
`;

export const RoadmapCardsContainer = styled.section`
	display: flex;
	justify-content: space-between;
`;
