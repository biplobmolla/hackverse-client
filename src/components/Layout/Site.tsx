import Navbar from "components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import { Breakpoint } from "react-socks";

export default function Site({ children }: any) {
	return (
		<>
			<Breakpoint large up>
				<Navbar />
			</Breakpoint>
			<Outlet />
		</>
	);
}
