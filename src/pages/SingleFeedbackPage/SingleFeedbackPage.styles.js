import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const SingleThreadPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 40px;
`;

export const SingleThreadPageContainerWhole = styled.div`
	width: 100%;
`;

export const ThreadContainer = styled.div`
	display: flex;
	background-color: ${STYLES.bgWhite};
	padding: 25px;
	margin-bottom: 18px;
	border-radius: 10px;
	box-shadow: ${STYLES.boxShadow};
`;

export const ThreadLeft = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const ThreadVotes = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${STYLES.bgLightBlue};
	padding: 6px 8px;
	border-radius: 10px;
	margin-right: 35px;
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

export const ThreadContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ThreadInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 12px;

	> h3 {
		font-weight: 900;
		font-size: 18px;
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

export const ThreadCategory = styled.div`
	display: flex;

	> p {
		padding: 2px 5px;
		font-size: 14px;
		border-radius: 5px;
		background-color: ${STYLES.categoryBadgeBg};
		color: ${STYLES.whiteText};
	}
`;

export const ThreadRight = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
`;

export const ThreadComments = styled.div`
	display: flex;
	align-items: center;
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
