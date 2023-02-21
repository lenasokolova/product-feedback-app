import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const FeedbackContainerDiv = styled.div`
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	background-color: ${STYLES.bgWhite};
	padding: 25px;
	margin-bottom: 18px;
	border-radius: 10px;
	box-shadow: ${STYLES.boxShadow};
`;

export const FeedbackLeftDiv = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const FeedbackVotesDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${STYLES.bgLightBlue};
	padding: 6px 8px;
	border-radius: 10px;
	margin-right: 35px;

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

export const FeedbackContentDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FeedbackInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 18px;

	> h3 {
		font-weight: 900;
		font-size: 17px;
		margin-bottom: 6px;
	}

	> p {
		font-weight: 500;
		font-size: 14px;
		color: ${STYLES.darkText};
	}

	> span {
		display: flex;
		align-items: center;
		font-size: 13px;
		font-weight: 600;
		margin-bottom: 6px;

		> .MuiSvgIcon-root {
			font-size: 15px;
			margin-right: 7px;
		}
	}
`;

export const FeedbackCategoryDiv = styled.div`
	display: flex;

	> p {
		padding: 2px 5px;
		font-size: 14px;
		border-radius: 5px;
		background-color: ${STYLES.categoryBadgeBg};
		color: ${STYLES.whiteText};
	}
`;

export const FeedbackRightDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const FeedbackCommentsDiv = styled.div`
	display: flex;
	align-items: center;

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
