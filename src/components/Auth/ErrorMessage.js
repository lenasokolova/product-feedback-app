import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { ErrorMsgDiv, ErrorMsgSpan } from "./ErrorMessage.styles";

export const ErrorMessage = ({ message }) => {
	return (
		<ErrorMsgDiv>
			<ErrorIcon />
			<ErrorMsgSpan>{message}</ErrorMsgSpan>
		</ErrorMsgDiv>
	);
};
