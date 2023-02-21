import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import routes from "./../../routes/routes";

export const ProtectedRoute = ({
	user,
	redirectPath = routes.REACT_APP_LOGIN_PATH,
	children,
}) => {
	if (!user) {
		return (
			<Navigate
				to={redirectPath}
				replace
			/>
		);
	}
	return children ? children : <Outlet />;
};
