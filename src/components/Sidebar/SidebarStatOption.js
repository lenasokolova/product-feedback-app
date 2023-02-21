import React from "react";
import styled from "styled-components";
import { STYLES } from "./../../variables/styleVariables";

const SidebarStatOption = ({ Icon, title, number, color }) => {
	return (
		<SidebarStatsContainer>
			<SidebarStatLeft>
				{Icon && <Icon style={{ color: `${color}` }} />}
				<h4>{title}</h4>
			</SidebarStatLeft>
			<SidebarStatRight>
				<p>{number}</p>
			</SidebarStatRight>
		</SidebarStatsContainer>
	);
};

export default SidebarStatOption;

const SidebarStatsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 12px;
	border-radius: 10px;
`;

const SidebarStatLeft = styled.div`
	display: flex;
	align-items: center;

	> .MuiSvgIcon-root {
		font-size: 14px;
		margin-right: 10px;
	}

	> h4 {
		font-weight: 500;
		color: ${STYLES.darkText};
		font-size: 14px;
	}
`;
const SidebarStatRight = styled.div`
	display: flex;
	align-items: center;

	> p {
		font-weight: 800;
		color: ${STYLES.darkText};
	}
`;
