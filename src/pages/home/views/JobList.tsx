import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { Breakpoint } from "react-socks";
import { Job } from "types";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { jobData } from "utils/data";

dayjs.extend(localizedFormat);

type JobListProps = {
	title: string;
	jobs: Job[];
};

export default function JobList({ title, jobs }: JobListProps) {
	return (
		<>
			<div className="flex justify-between items-center px-5 lg:px-0">
				<h2 className="font-bold text-xl lg:text-2xl">{title}</h2>
			</div>
			<Breakpoint medium down>
				<>
					<section className="container mx-auto px-5 py-2">
						<div className="mt-1 flex flex-wrap">
							{jobData.map((job, idx) => (
								<Link
									to="/job"
									key={idx}
									className="shadow-sm bg-white rounded px-3 py-3.5 w-full flex mb-2.5"
								>
									<img
										src={job.company.logo}
										alt="logo"
										className="w-8 h-8 object-cover rounded"
									/>
									<div className="ml-2">
										<div className="font-semibold">{job.title}</div>
										<div className="text-xs -mt-1">{job.company.name}</div>
									</div>
									{/* <span>10d left</span> */}
								</Link>
							))}
						</div>
					</section>
				</>
			</Breakpoint>
			<Breakpoint large up>
				<div className="mt-2">
					{jobs.map((job, idx) => (
						<Link to="/job" key={idx}>
							<div className="flex items-center border-b py-6">
								<img
									src={job.company.logo}
									alt="company logo"
									className="w-12 h-12 object-cover rounded-lg"
								/>
								<div className="ml-5 flex-1">
									<h3 className="font-semibold text-lg">{job.title}</h3>
									<div className="flex">
										<div>
											<i className="far fa-building mr-1.5"></i>
											{job.company.name}
										</div>
										<div className="ml-10">
											<i className="fas fa-map-marker-alt mr-1.5"></i>
											{job.company.location}
										</div>
									</div>
								</div>
								<div className="justify-self-end text-xs text-right">
									<div className="rounded-full px-2.5 py-0.5 inline-block bg-primary-700 text-white font-semibold">
										{job.type}
									</div>
									<div className="mt-2">
										<i className="far fa-calendar mr-1.5"></i>
										{dayjs(job.endDate).format("LL")}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</Breakpoint>
		</>
	);
}
