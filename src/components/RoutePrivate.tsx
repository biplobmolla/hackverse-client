import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useAuth } from "hooks";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RoutePrivate() {
	const { user } = useAuth();

	return user ? (
		<Outlet />
	) : typeof user === "undefined" ? (
		<FullPageSpinner />
	) : (
		<Navigate to="/login" />
	);
}

export const FullPageSpinner = () => (
	<div className="flex items-center justify-center h-screen">
		<Spin
			indicator={
				<LoadingOutlined
					className="text-primary-700"
					style={{ fontSize: 24 }}
					spin
				/>
			}
		/>
	</div>
);
