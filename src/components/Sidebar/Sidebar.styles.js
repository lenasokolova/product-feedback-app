import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 240px;
	min-width: 200px;
	margin-right: 20px;
`;

export const SidebarHeader = styled.div`
	display: flex;
	flex-direction: column;
	background-image: ${STYLES.bgGradient};
	border-radius: 10px;
	color: ${STYLES.whiteText};
	padding: 18px;
	margin-bottom: 20px;
	box-shadow: ${STYLES.boxShadow};

	> h3 {
		font-size: 20px;
		font-weight: 700;
	}

	> p {
		font-size: 13px;
		font-weight: 200;
		margin-top: 5px;
	}
`;

export const StyledSpan = styled.span``;

export const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;

	:hover {
		background: ${STYLES.userGradientHover};
	}
`;

export const StyledImg = styled.img`
	height: 50px;
	width: 50px;
	object-fit: cover;
	border-radius: 8px;
	margin-right: 10px;
`;

export const NoImg = styled.div`
	height: 50px;
	width: 50px;
	background: ${STYLES.bgMidBlue};
	border-radius: 8px;
	margin-right: 10px;
`;

export const SidebarOptionContainer = styled.div`
	display: flex;
	gap: 10px 0px;
	padding: 18px;
	flex-wrap: wrap;
	background-color: ${STYLES.bgWhite};
	border-radius: 10px;
	margin-bottom: 20px;
	box-shadow: ${STYLES.boxShadow};
`;

export const SidebarStatsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 18px;
	background-color: ${STYLES.bgWhite};
	border-radius: 10px;
	box-shadow: ${STYLES.boxShadow};
`;

export const SidebarStatsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;

	> h3 {
		font-weight: 900;
		font-size: 17px;
		color: ${STYLES.darkText};
	}

	> span {
		font-size: 12px;
		text-decoration: underline;
		color: ${STYLES.blueText};
		font-weight: 900;
		cursor: pointer;
	}
`;

export const SidebarStatsBody = styled.div``;
