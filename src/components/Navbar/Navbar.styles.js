import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

// NavbarMain
export const NavContainerDiv = styled.div`
	max-width: 1500px;
	margin-bottom: 18px;
	background-color: ${STYLES.navbarDarkBg};
	display: flex;
	padding: 15px;
	border-radius: 5px;
	color: ${STYLES.whiteText};
`;

export const NavLeftDiv = styled.div`
	display: flex;
	align-items: center;
	flex: 0.3;

	> .MuiSvgIcon-root {
		font-size: 20px;
		margin-right: 8px;
	}

	> h3 {
		font-size: 14px;
	}
`;

export const NavCenterDiv = styled.div`
	display: flex;
	align-items: center;
	flex: 0.4;
	font-size: 12px;

	> span {
		font-weight: 100;
		margin-right: 5px;
	}

	> p {
		font-weight: 800;
		margin-right: 5px;
	}

	> .MuiSvgIcon-root {
		font-size: 18px;
	}
`;

export const NavRightDiv = styled.div`
	display: flex;
	flex: 0.3;
	justify-content: flex-end;

	button {
		display: flex;
		align-items: center;
		background-color: ${STYLES.otherBtn};
		border: none;
		color: ${STYLES.whiteText};
		font-weight: 600;
		font-size: 12px;
		padding: 10px 25px;
		border-radius: 10px;
		cursor: pointer;

		:hover {
			background-color: ${STYLES.otherBtnHover};
		}

		> .MuiSvgIcon-root {
			font-size: 16px;
			margin-right: 4px;
			margin-left: -10px;
		}
	}
`;

// NavbarFeedback

export const NavFeedBackDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
	width: 100%;
`;

export const NavFeedGoBackBtn = styled.button`
	display: flex;
	align-items: center;
	border: none;
	background-color: transparent;
	cursor: pointer;

	> .MuiSvgIcon-root {
		font-size: 20px;
		color: ${STYLES.iconDarkBlue};
	}

	> p {
		font-size: 12px;
		font-weight: 800;
		color: ${STYLES.darkText};
	}
`;

export const NavFeedEditBtn = styled.button`
	display: flex;
	align-items: center;
	background-color: ${STYLES.submitBtn};
	border: none;
	color: ${STYLES.whiteText};
	font-weight: 600;
	font-size: 12px;
	padding: 10px 25px;
	border-radius: 10px;
	cursor: pointer;

	:hover {
		background-color: ${STYLES.submitBtnHover};
	}
`;

// NavbarRoadmap

export const NavRoadmapContainerDiv = styled.div`
	color: ${STYLES.whiteText};
	margin-bottom: 18px;
	display: flex;
	justify-content: space-between;
	background-color: ${STYLES.navbarDarkBg};
	padding: 20px;
	border-radius: 5px;
`;

export const NavRoadmapLeftDiv = styled.div``;

export const NavLeftTopDiv = styled.div`
	display: flex;
	align-items: center;
	flex: 0.3;

	> .MuiSvgIcon-root {
		font-size: 20px;
		margin-right: 8px;
	}

	> Link {
		color: ${STYLES.whiteText};
	}

	> h3 {
		font-size: 14px;
	}
`;

export const NavLeftBottomDiv = styled.div``;

export const NavRoadmapRightDiv = styled.div`
	display: flex;
	align-items: center;

	button {
		display: flex;
		align-items: center;
		background-color: ${STYLES.otherBtn};
		border: none;
		color: ${STYLES.whiteText};
		font-weight: 600;
		font-size: 12px;
		padding: 10px 25px;
		border-radius: 10px;
		cursor: pointer;

		:hover {
			background-color: ${STYLES.otherBtnHover};
		}

		> .MuiSvgIcon-root {
			font-size: 16px;
			margin-right: 4px;
			margin-left: -10px;
		}
	}
`;
