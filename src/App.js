import React from "react";
import { Route, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SingleFeedbackPage from "./pages/SingleFeedbackPage/SingleFeedbackPage";
import EditFeedbackPage from "./pages/EditFeedbackPage/EditFeedbackPage";
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import routes from "./routes/routes";
import CreateNewFeedbackPage from "./pages/CreateNewFeedbackPage/CreateNewFeedbackPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
	const [user] = useAuthState(auth);

	return (
		<Routes>
			<Route
				path={routes.REACT_APP_LOGIN_PATH}
				index
				element={<LoginPage />}
			/>
			<Route
				path={routes.REACT_APP_REGISTER_PATH}
				element={<RegisterPage />}
			/>

			<Route element={<ProtectedRoute user={user} />}>
				<Route
					path={routes.REACT_APP_DASHBOARD_PATH}
					element={<DashboardPage />}
				/>

				<Route
					path={routes.REACT_APP_ROADMAP_PATH}
					element={<RoadmapPage />}
				/>

				<Route
					path={`${routes.REACT_APP_SINGLE_FEEDBACK_PATH}:id`}
					element={<SingleFeedbackPage />}
				/>
				<Route
					path={routes.REACT_APP_ADD_FEEDBACK_PATH}
					element={<CreateNewFeedbackPage />}
				/>
				<Route
					path={`${routes.REACT_APP_EDIT_FEEDBACK_PATH}:id`}
					element={<EditFeedbackPage />}
				/>
			</Route>

			<Route
				path={routes.REACT_APP_404_PATH}
				element={<p>There is nothing here: 404!</p>}
			/>
		</Routes>
	);
};

export default App;
