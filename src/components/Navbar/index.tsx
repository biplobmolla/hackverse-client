import React from "react";
import NavDashboard from "./Dashboard";
import NavDefault from "./Default";
import NavMobile from "./Mobile";

const Navbar = React.forwardRef((props, ref) => (
	<NavDefault {...props} />
)) as unknown as ((
	props: any & {
		ref?: any;
	}
) => React.ReactElement) & {
	Dashboard: typeof NavDashboard;
	Mobile: typeof NavMobile;
};

Navbar.Dashboard = NavDashboard;
Navbar.Mobile = NavMobile;

export default Navbar;
