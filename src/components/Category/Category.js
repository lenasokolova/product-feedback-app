import React from "react";
import styled from "styled-components";
import { STYLES } from "../../variables/styleVariables";

export const Category = ({ category, count, onClick }) => {
	return (
		<CategoryBtn onClick={onClick}>
			<p>
				{category} ({count})
			</p>
		</CategoryBtn>
	);
};

const CategoryBtn = styled.button`
	font-size: 12px;
	font-weight: 900;
	color: ${STYLES.blueText};
	background-color: ${STYLES.categoryBg};
	padding: 10px 18px;
	margin-right: 10px;
	margin-bottom: 10px;
	border-radius: 10px;
	border: none;
	cursor: pointer;

	:hover {
		color: ${STYLES.whiteText};
		background-color: ${STYLES.categoryHover};
	}
`;
