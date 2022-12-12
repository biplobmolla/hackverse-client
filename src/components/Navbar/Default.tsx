import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

type NavDefaultProps = {
	className?: string;
};

export default function NavDefault({ className }: NavDefaultProps) {
	return (
		<>
			<nav
				className={classNames(
					"fixed bg-white shadow-sm w-full z-50",
					className
				)}
			>
				<div className="container mx-auto flex items-center justify-between py-3.5">
					<Link to="/" className="font-bold text-3xl font-poppins">
						Hackverse
					</Link>
					<div className="flex items-center">
						<Link to="/for-talents" className="mx-2.5 font-medium">
							For Talents
						</Link>
						<Link to="/for-employers" className="mx-2.5 font-medium">
							For Employers
						</Link>
						<Link to="/login" className="mx-2.5 font-medium">
							Login
						</Link>
						<Link
							to="/post-job"
							className="mx-2.5 bg-primary-700 hover:bg-primary-800 text-white hover:text-white px-3.5 pt-1.5 pb-1.5 font-medium rounded-md"
						>
							Post a job
						</Link>
					</div>
				</div>
			</nav>
			<div className="h-16" />
		</>
	);
}
