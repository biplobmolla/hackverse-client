import React from "react";
import { Navbar } from "components";

export default function Mobile({ children }: any) {
	return (
		<>
			{children}
			<Navbar.Mobile />
		</>
	);
}
