import success from "assets/img/correct.gif";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import storage from "utils/storage";

const Success = () => {
	const navigate = useNavigate();
	const token = useLocation().search.slice(7);

	if (token) {
		setTimeout(() => {
			storage.set("token", token);
			navigate({
				pathname: "/dashboard",
			});
		}, 2500);
	}

	return (
		<div className="mt-60">
			<div className="flex flex-col items-center">
				<img src={success} width="90px" alt="" />
				<h2 className="text-2xl my-6">
					Thanks for being connected with us.
					<br />
					Your accounts is verified successfully
				</h2>
			</div>
		</div>
	);
};

export default Success;
