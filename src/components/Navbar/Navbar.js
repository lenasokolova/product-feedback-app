import React from "react";
import NavbarRoadmap from "./NavbarRoadmap";
import NavbarFeedback from "./NavbarFeedback";
import NavbarMain from "./NavbarMain";
import { useLocation, useParams } from "react-router-dom";
import routes from "../../routes/routes";

const Navbar = () => {
	let location = useLocation();
	const { id } = useParams();

	return (
		<>
			{location.pathname === routes.REACT_APP_DASHBOARD_PATH && <NavbarMain />}

			{location.pathname ===
				`${routes.REACT_APP_SINGLE_FEEDBACK_PATH}${id}` && <NavbarFeedback />}

			{location.pathname === routes.REACT_APP_ROADMAP_PATH && <NavbarRoadmap />}
		</>
	);
};

export default Navbar;
