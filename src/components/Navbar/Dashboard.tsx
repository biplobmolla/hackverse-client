import {
	ChatIcon,
	CogIcon,
	LogoutIcon,
	PlusCircleIcon,
	UserCircleIcon,
	ViewBoardsIcon,
	ViewGridIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Dropdown, Menu } from "antd";
import classNames from "classnames";
import { useAuth } from "hooks";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavDashboard() {
	const { logout } = useAuth();

	const menu = (
		<Menu
			items={[
				// {
				// 	label: <Link to="/profile">View Profile</Link>,
				// 	key: "profile",
				// 	icon: <UserCircleIcon className="w-6 h-6" />,
				// },
				{
					label: <Link to="/post-job">Post a Job</Link>,
					key: "post-job",
					icon: <PlusCircleIcon className="w-6 h-6" />,
				},
				{ type: "divider" },
				{
					label: <Link to="/settings/profile">Settings & Privacy</Link>,
					key: "settings",
					icon: <CogIcon className="w-6 h-6" />,
				},
				{
					label: <Link to="/feedback">Leave Feedback</Link>,
					key: "feedback",
					icon: <ChatIcon className="w-6 h-6" />,
				},
				{
					label: "Logout",
					key: "logout",
					onClick: logout,
					icon: <LogoutIcon className="w-6 h-6" />,
				},
			]}
		/>
	);

	return (
		<>
			<nav className="bg-white shadow py-2.5 nav-dashboard fixed w-full z-[999]">
				<div className="container mx-auto flex items-center justify-between">
					<Link
						to="/dashboard"
						className="font-extrabold text-3xl font-poppins"
					>
						Hackverse
					</Link>

					<div className="flex items-center">
						<NavItem
							to="/dashboard"
							icon={<ViewGridIcon className="w-6 h-6" />}
						>
							Dashboard
						</NavItem>
						<NavItem
							to="/jobs"
							icon={<ViewBoardsIcon className="w-6 h-6" />}
							className="ml-2"
						>
							Jobs
						</NavItem>
					</div>

					<Dropdown overlay={menu} trigger={["click"]}>
						<button
							className="flex items-center text-sm px-1 py-0.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							id="user-menu"
							aria-haspopup="true"
						>
							<img
								className="h-8 w-8 rounded-full"
								src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
								alt="user"
							/>

							<div className="ml-2.5 text-left">
								<h4 className="text-sm font-semibold leading-3">Joh Doe</h4>
								<small>Brainstation-23 LTD</small>
							</div>

							<ChevronDownIcon className="w-6 h-6 ml-2" />
						</button>
					</Dropdown>
				</div>
			</nav>
			<div style={{ height: 60 }} />
		</>
	);
}

type NavItemProps = {
	icon?: React.ReactNode;
	className?: string;
	to: string;
	children: React.ReactNode;
};

const NavItem = ({ icon, className, to, children }: NavItemProps) => (
	<NavLink
		end
		to={to}
		className={classNames(
			"flex items-center font-semibold text-base cursor-pointer px-4 py-2 rounded-md hover:bg-primary-300 hover:text-white nav-item",
			className
		)}
	>
		<div className="mr-1">{icon}</div>
		{children}
	</NavLink>
);
