import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import storage from "utils/storage";

export default function RouteAnonymous() {
	const token = storage.get("token");

	return token ? <Navigate to="/dashboard" /> : <Outlet />;
}
