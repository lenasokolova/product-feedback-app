import React from "react";
import { GoBackBtn } from "./GoBackBtn";
import { AddFeedbackBtn } from "./AddFeedbackBtn";
import {
	NavLeftBottomDiv,
	NavLeftTopDiv,
	NavRoadmapContainerDiv,
	NavRoadmapLeftDiv,
	NavRoadmapRightDiv,
} from "./Navbar.styles.js";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

const NavbarRoadmap = () => {
	const navigation = useNavigate();
	return (
		<div>
			<NavRoadmapContainerDiv>
				<NavRoadmapLeftDiv>
					<NavLeftTopDiv>
						<GoBackBtn
							onClick={() => navigation(routes.REACT_APP_DASHBOARD_PATH)}
						/>
					</NavLeftTopDiv>
					<NavLeftBottomDiv>
						<h3>Roadmap</h3>
					</NavLeftBottomDiv>
				</NavRoadmapLeftDiv>

				<NavRoadmapRightDiv>
					<AddFeedbackBtn />
				</NavRoadmapRightDiv>
			</NavRoadmapContainerDiv>
		</div>
	);
};

export default NavbarRoadmap;
