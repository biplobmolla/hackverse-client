import React from "react";
import { jobData } from "utils/data";
import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button } from "lib";

export default function JobDetails() {
	const job = jobData[0];
	console.log(job);
	return (
		<div
			className=" overflow-y-auto pr-2.5"
			style={{ height: "calc(100vh - 110px)" }}
		>
			<div className="bg-white rounded-md overflow-hidden h-full">
				<img
					src="https://png.pngtree.com/thumb_back/fh260/background/20190828/pngtree-top-view-computer-design-background-image_307724.jpg"
					alt=""
					className="h-36 object-cover w-full"
				/>
				<div className="px-6">
					<img
						src={job.company.logo}
						alt=""
						className="h-16 w-16 inline-block object-cover border-4 border-solid border-white rounded-lg -mt-8"
					/>
					<div className="mt-3 flex items-center justify-between">
						<h1 className="text-2xl font-semibold">{job.title}</h1>
						<div className="flex items-center">
							<Button className="text-xs font-medium px-2.5 !py-1 mr-2">
								Apply Now
							</Button>
							<div className="h-6 w-6 flex items-center justify-center border-2 border-gray-200 hover:border-primary-400 cursor-pointer rounded-md mr-1.5 hover:bg-primary-400 text-gray-600 hover:text-white">
								<HeartOutlined />
							</div>
							<div className="h-6 w-6 flex items-center justify-center border-2 border-gray-200 hover:border-primary-400 cursor-pointer rounded-md hover:bg-primary-400 text-gray-600 hover:text-white">
								<ShareAltOutlined />
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center mt-1.5">
						<h3 className="text-sm font-semibold text-gray-500">
							{job.company.location}
						</h3>
						<div className="flex items-center">
							<h3 className="text-sm text-gray-500 ">Posted 8 Days ago</h3>
							<span className="mx-1.5 opacity-50 text-gray-500">&middot;</span>
							<h3 className="text-sm font-semibold text-gray-500 ">
								98 Applicants
							</h3>
						</div>
					</div>
					<div className="border-2 border-gray-200 rounded-lg mt-6 flex">
						<div className="p-2.5 border-r-2 border-gray-200 flex-1">
							<h5 className="text-xs mb-0.5 text-gray-500">Experience</h5>
							<h3 className="text-sm font-medium text-gray-500">
								Minimum 1 year
							</h3>
						</div>
						<div className="p-2.5 border-r-2 border-gray-200 flex-1">
							<h5 className="text-xs mb-0.5 text-gray-500">Work Level</h5>
							<h3 className="text-sm font-medium text-gray-500">Senior</h3>
						</div>
						<div className="p-2.5 border-r-2 border-gray-200 flex-1">
							<h5 className="text-xs mb-0.5 text-gray-500">Employment Type</h5>
							<h3 className="text-sm font-medium text-gray-500">Full Time</h3>
						</div>
						<div className="p-2.5 flex-1">
							<h5 className="text-xs mb-0.5 text-gray-500">Offer Salary</h5>
							<h3 className="text-sm font-medium text-gray-500">৳20k/month</h3>
						</div>
					</div>
					<div className="mt-6">
						<h1 className="text-base font-semibold">Overview</h1>
						<article className="text-sm mt-1">{job.company.info}</article>
					</div>
					<div className="mt-5">
						<h1 className="text-base font-semibold">Description</h1>
						<article className="text-sm mt-1">{job.company.info}</article>
					</div>
				</div>
			</div>
		</div>
	);
}
