import React from "react";
import Filters from "./views/Filters";
import JobDetails from "./JobDetails";
import JobList from "./JobList";
import JobsManage from "pages/jobs-manage";

export default function Jobs() {
	const isCompany = true;

	return (
		<div>
			{isCompany ? (
				<JobsManage />
			) : (
				<div className="grid grid-cols-12 gap-5 container mx-auto mt-7 overflow-hidden">
					<div className="col-span-3">
						<Filters />
					</div>
					<div className="col-span-4">
						<JobList />
					</div>
					<div className="col-span-5">
						<JobDetails />
					</div>
				</div>
			)}
		</div>
	);
}
