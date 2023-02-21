import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import routes from "../../routes/routes";
import {
	NavFeedBackDiv,
	NavFeedEditBtn,
	NavFeedGoBackBtn,
} from "./Navbar.styles";

const NavbarFeedback = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	let location = useLocation();

	return (
		<NavFeedBackDiv>
			<NavFeedGoBackBtn
				onClick={() => navigate(routes.REACT_APP_DASHBOARD_PATH)}
			>
				<NavigateBeforeIcon />
				<p>Go Back</p>
			</NavFeedGoBackBtn>
			{location.pathname !== routes.REACT_APP_ADD_FEEDBACK_PATH && (
				<NavFeedEditBtn
					onClick={() =>
						navigate(`${routes.REACT_APP_EDIT_FEEDBACK_PATH}${id}`)
					}
				>
					Edit Feedback
				</NavFeedEditBtn>
			)}
		</NavFeedBackDiv>
	);
};

export default NavbarFeedback;
