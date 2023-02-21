import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const AddCommentContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${STYLES.bgWhite};
	padding: 25px;
	margin-bottom: 18px;
	border-radius: 10px;
	box-shadow: ${STYLES.boxShadow};

	> h3 {
		font-size: 16px;
		margin-bottom: 16px;
	}

	> form > textarea {
		width: 100%;
		border: none;
		background-color: ${STYLES.inputBg};
		height: 70px;
		padding: 15px;
		margin-bottom: 10px;
	}

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	> div > span {
		font-size: 12px;
		font-weight: 500;
		color: ${STYLES.darkText};
	}

	> div > button {
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
	}
`;
