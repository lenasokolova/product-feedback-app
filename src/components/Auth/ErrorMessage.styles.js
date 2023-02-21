import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const ErrorMsgDiv = styled.div`
	padding: 8px 10px;
	margin-top: 5px;
	margin-bottom: 15px;
	display: flex;
	justify-content: flex-start;
	border: 2px solid ${STYLES.errorText};
	color: ${STYLES.errorText};
	width: 350px;
	border-radius: 10px;

	> .MuiSvgIcon-root {
		margin-top: 2px;
		font-size: 22px;
	}
`;

export const ErrorMsgSpan = styled.span`
	margin-left: 10px;
`;
