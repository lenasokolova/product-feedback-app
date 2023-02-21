import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const FeedbackDiv = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${STYLES.bgWhite};
	padding: 30px;
	border-radius: 10px;

	box-shadow: ${STYLES.boxShadow};

	> h2 {
		font-size: 24px;
		margin-bottom: 10px;
	}
`;

export const FeedForm = styled.form`
	display: flex;
	flex-direction: column;

	> h3 {
		font-size: 14px;
		margin-bottom: 3px;
	}

	> label {
		margin-bottom: 8px;
		font-size: 14px;
	}

	> input,
	select,
	textarea {
		margin-bottom: 18px;
		background-color: ${STYLES.inputBg};
		border: none;
		padding: 15px;
		border-radius: 10px;
	}
`;

export const FeedBtnDiv = styled.div`
	display: flex;
	justify-content: flex-end;

	> button {
		border: none;
		color: ${STYLES.whiteText};
		font-weight: 600;
		font-size: 12px;
		padding: 10px 25px;
		border-radius: 10px;
		margin-left: 10px;

		cursor: pointer;
	}
`;
