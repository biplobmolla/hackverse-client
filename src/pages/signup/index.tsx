import React from "react";
import { useLocation } from "react-router-dom";
import EmployeeSignUp from "./views/employee";
import EmployerSignUp from "./views/employer";

export default function SignUp() {
	const location = useLocation();

	return (
		<div>
			{location.search.includes("talents") ? (
				<EmployeeSignUp />
			) : (
				<EmployerSignUp />
			)}
		</div>
	);
}
