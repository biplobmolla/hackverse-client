import Icons from "components/Icons";
import React from "react";

export default function NavMobile() {
	return (
		<div className="fixed z-[999] bottom-2.5 w-full px-3">
			<div className="px-7 bg-black shadow-lg rounded-2xl">
				<div className="flex items-center">
					<div className="flex-1 group">
						<a
							href="/"
							className="flex items-end justify-center text-center mx-auto px-4 pt-2.5 w-full text-gray-400 group-hover:text-indigo-500"
						>
							<span className="flex flex-col items-center px-1 pt-1 pb-1">
								<Icons.Home className="w-6 h-6" />
								<span className="block text-xs pb-2 pt-0.5">Home</span>
								<span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
							</span>
						</a>
					</div>
					<div className="flex-1 group">
						<a
							href="/"
							className="flex items-end justify-center text-center mx-auto px-4 pt-2.5 w-full text-gray-400 group-hover:text-indigo-500"
						>
							<span className="flex flex-col items-center px-1 pt-1 pb-1">
								<Icons.Search className="w-6 h-6" />
								<span className="block text-xs pb-2 pt-0.5">Search</span>
								<span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
							</span>
						</a>
					</div>
					<div className="flex-1 group">
						<a
							href="/"
							className="flex items-end justify-center text-center mx-auto px-4 pt-2.5 w-full text-gray-400 group-hover:text-indigo-500"
						>
							<span className="flex flex-col items-center px-1 pt-1 pb-1">
								<Icons.Bell className="w-6 h-6" />
								<span className="block text-xs pb-2 pt-0.5">Notifications</span>
								<span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
							</span>
						</a>
					</div>
					<div className="flex-1 group">
						<a
							href="/"
							className="flex items-end justify-center text-center mx-auto px-4 pt-2.5 w-full text-gray-400 group-hover:text-indigo-500"
						>
							<span className="flex flex-col items-center px-1 pt-1 pb-1">
								<Icons.User className="w-6 h-6" />
								<span className="block text-xs pb-2 pt-0.5">Profile</span>
								<span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
