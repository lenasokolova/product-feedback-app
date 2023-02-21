import React from "react";
import styled from "styled-components";
import {
	handleBackground,
	handleHover,
} from "../../helpers/handleButtonStyles";
import { STYLES } from "../../variables/styleVariables";

export const CustomFeedBtn = ({
	title,
	onClick,
	cancelBg,
	background,
	hover,
}) => {
	return (
		<CustomFeedButton
			bg={cancelBg}
			onClick={onClick}
			background={background}
			hover={hover}
		>
			{title}
		</CustomFeedButton>
	);
};

const CustomFeedButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	color: ${STYLES.whiteText};
	font-weight: 600;
	font-size: 12px;
	padding: 10px 25px;
	border-radius: 10px;
	cursor: pointer;

	${({ background }) => handleBackground(background)};
	:hover {
		${({ background }) => handleHover(background)};
	}
`;
