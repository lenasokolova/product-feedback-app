import React from "react";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const AddFeedbackBtn = () => {
	const navigate = useNavigate();
	return (
		<AddFeedBtn onClick={() => navigate(routes.REACT_APP_ADD_FEEDBACK_PATH)}>
			<AddIcon />
			<p>Add Feedback</p>
		</AddFeedBtn>
	);
};

const AddFeedBtn = styled.button`
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
`;
