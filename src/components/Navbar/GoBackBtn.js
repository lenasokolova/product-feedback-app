import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const GoBackBtn = ({ onClick }) => {
	return (
		<NavFeedGoBackBtn onClick={onClick}>
			<NavigateBeforeIcon />
			<p>Go Back</p>
		</NavFeedGoBackBtn>
	);
};

const NavFeedGoBackBtn = styled.button`
	display: flex;
	align-items: center;
	border: none;
	background-color: transparent;
	color: ${STYLES.whiteText};
	cursor: pointer;

	> .MuiSvgIcon-root {
		font-size: 20px;
	}

	> p {
		font-size: 12px;
		font-weight: 800;
	}
`;
