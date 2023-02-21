import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const FeedCardContainer = styled.div`
	width: 240px;
	max-width: 240px;
	min-width: 200px;
	border-radius: 10px;
	background-color: ${STYLES.bgWhite};
	padding: 25px;
	border-top: 5px solid ${STYLES.statusPlanned};
	margin-bottom: 20px;
	box-shadow: ${STYLES.boxShadow};
`;

export const FeedCardBottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
`;

export const FeedCardTop = styled.div``;

export const FeedCardBody = styled.div`
	width: 100%;

	> h4 {
		font-size: 14px;
		margin-bottom: 15px;
	}

	> p {
		font-size: 12px;
		margin-bottom: 15px;
		word-wrap: break-word;
	}
`;

export const FeedCardCategoryDiv = styled.div`
	display: flex;

	> p {
		padding: 2px 5px;
		font-size: 14px;
		border-radius: 5px;
		background-color: ${STYLES.categoryBadgeBg};
		color: ${STYLES.whiteText};
	}
`;

export const ThreadVotes = styled.div`
	display: flex;
	align-items: center;
	background-color: ${STYLES.bgLightBlue};
	padding: 6px 8px;
	border-radius: 10px;
	margin-right: 35px;
	margin-top: 15px;

	cursor: pointer;

	> .MuiSvgIcon-root {
		font-size: 20px;
		color: ${STYLES.iconDarkBlue};
	}

	> h4 {
		font-size: 13px;
		font-weight: 900;
		margin-bottom: 2px;
	}
`;

export const ThreadComments = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	cursor: pointer;

	> .MuiSvgIcon-root {
		font-size: 20px;
		color: ${STYLES.iconLightBlue};
		margin-right: 8px;
	}

	> h3 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 3px;
	}
`;
