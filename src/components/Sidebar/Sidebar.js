import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SidebarStatOption from "./SidebarStatOption";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Category } from "./../Category/Category";
import {
	NoImg,
	SidebarContainer,
	SidebarHeader,
	SidebarOptionContainer,
	SidebarStatsBody,
	SidebarStatsContainer,
	SidebarStatsHeader,
	StyledDiv,
	StyledImg,
	StyledSpan,
} from "./Sidebar.styles";
import { STYLES } from "../../variables/styleVariables";
import routes from "./../../routes/routes";
import useRoadmapPage from "./../../pages/RoadmapPage/useRoadmapPage";
import useSidebarCategory from "./useSidebarCategory";

const Sidebar = () => {
	const [user] = useAuthState(auth);

	const { inProgress, live, planned } = useRoadmapPage();
	const {
		featureCount,
		uiCount,
		uxCount,
		enhancementCount,
		bugCount,
		noCategoryCount,
	} = useSidebarCategory();
	return (
		<SidebarContainer>
			<SidebarHeader>
				<h3>Feedback Board</h3>
				<StyledSpan>Signed in as </StyledSpan>
				<StyledDiv>
					{user.photoURL ? <StyledImg src={user.photoURL} /> : <NoImg />}

					<p>{user.displayName || user.email}</p>
				</StyledDiv>
			</SidebarHeader>
			<SidebarOptionContainer>
				<div>
					<h3>Categories</h3>
				</div>
				<div>
					<Category
						onClick={() => alert("Will sort this soon!")}
						category="No category"
						count={noCategoryCount}
					/>
					<Category
						onClick={() => alert("Will sort this soon!")}
						category="UI"
						count={uiCount}
					/>
					<Category
						onClick={() => alert("Will sort this soon!")}
						category="UX"
						count={uxCount}
					/>
					<Category
						onClick={() => alert("Will sort this soon!")}
						category="Enchancement"
						count={enhancementCount}
					/>
					<Category
						onClick={() => alert("Will sort this soon!")}
						category="Bug"
						count={bugCount}
					/>
					<Category
						onClick={() => alert("Will sort this soon!")}
						category="Feature"
						count={featureCount}
					/>
				</div>
			</SidebarOptionContainer>
			<SidebarStatsContainer>
				<SidebarStatsHeader>
					<h3>Roadmap</h3>
					<Link to={routes.REACT_APP_ROADMAP_PATH}>
						<span>View</span>
					</Link>
				</SidebarStatsHeader>
				<SidebarStatsBody>
					<SidebarStatOption
						Icon={FiberManualRecordIcon}
						title={"Planned"}
						number={planned.length}
						color={STYLES.statusPlanned}
					/>
					<SidebarStatOption
						Icon={FiberManualRecordIcon}
						title="In-progress"
						number={inProgress.length}
						color={STYLES.statusInProgress}
					/>
					<SidebarStatOption
						Icon={FiberManualRecordIcon}
						title="Live"
						number={live.length}
						color={STYLES.statusLive}
					/>
				</SidebarStatsBody>
			</SidebarStatsContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
