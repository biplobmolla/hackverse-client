import React from "react";
import { Navbar, Footer } from "components";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col justify-between">
			<div>
				<Navbar.Dashboard />
				<div className="container mx-auto my-7">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
}
