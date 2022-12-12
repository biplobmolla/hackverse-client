import classNames from "classnames";
import React from "react";
import { jobData } from "utils/data";

export default function JobList() {
	return (
		<div
			className="overflow-y-auto pr-2.5"
			style={{ height: "calc(100vh - 110px)" }}
		>
			{jobData.map((job, idx) => (
				<div
					key={idx}
					className="shadow-sm bg-white mb-3 rounded-lg cursor-pointer p-3.5 hover:bg-primary-400 hover:text-white"
				>
					<div className="flex">
						<img
							src={job.company.logo}
							className="w-10 h-10 rounded-md object-cover"
							alt="company"
						/>
						<div className="mx-2.5 flex-1 -translate-y-1">
							<h4 className="font-semibold text-lg text-inherit">
								{job.title}
							</h4>
							<small className="inline-block opacity-80 text-xs mt-2 -translate-y-2">
								{job.company.location}
							</small>
						</div>
					</div>
					<div className="flex items-center mt-2">
						<Tag className="text-amber-600">Full Time</Tag>
						<Tag className="text-blue-600 ml-2">Senior Level</Tag>
					</div>
				</div>
			))}
		</div>
	);
}

const Tag = ({ children, className }: any) => {
	return (
		<div
			className={classNames(
				"bg-gray-100 text-xss px-2 py-1 rounded",
				className
			)}
		>
			{children}
		</div>
	);
};
