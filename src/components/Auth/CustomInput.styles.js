import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 8px 0px;
`;

export const InputLabel = styled.label`
	font-size: 18px;
	font-weight: 500;
`;

export const Input = styled.input`
	height: 50px;
	background-color: ${STYLES.bgWhite};
	border: 0.5px solid ${STYLES.inputBorder};
	border-radius: 4px;
	padding: 0px 15px;
`;

export const InputError = styled.p`
	padding-top: 5px;
	color: ${STYLES.errorText};
	font-size: 14px;
`;
