import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import { AddFeedbackBtn } from "./AddFeedbackBtn";
import {
	NavCenterDiv,
	NavContainerDiv,
	NavLeftDiv,
	NavRightDiv,
} from "./Navbar.styles";
import { useSelector } from "react-redux";

const NavbarMain = () => {
	const { feedbacks } = useSelector((state) => state.data);
	console.log(feedbacks);

	return (
		<NavContainerDiv>
			<NavLeftDiv>
				<LightbulbIcon />
				<h3>{feedbacks.length} Suggestions</h3>
			</NavLeftDiv>
			<NavCenterDiv />

			<NavRightDiv>
				<AddFeedbackBtn />
			</NavRightDiv>
		</NavContainerDiv>
	);
};

export default NavbarMain;
