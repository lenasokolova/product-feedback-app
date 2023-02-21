import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const WelcomeImageDiv = styled.div`
	height: 100%;
	width: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${STYLES.bgMidBlue};
`;

export const WelcomeInfoDiv = styled.div`
	text-align: center;
	margin-bottom: 50px;
`;

export const WelcomeImg = styled.img`
	max-width: 80%;
	margin-left: 45px;
`;
