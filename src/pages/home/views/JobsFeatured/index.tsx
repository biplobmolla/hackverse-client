import { Breakpoint } from "react-socks";
import { jobData } from "utils/data";
import JobList from "../JobList";
import JobCard from "./JobCard";

const JobsFeatured = () => {
	return (
		<>
			<Breakpoint medium down>
				<>
					<section className="container mx-auto px-5 py-4">
						<div className="flex justify-between items-center">
							<h2 className="font-bold text-xl">Featured jobs</h2>
							<span className="text-xs font-semibold text-gray-600">
								Show all
							</span>
						</div>
						<div className="mt-4 pb-2 flex overflow-x-scroll">
							{jobData.map((job, idx) => (
								<div
									key={idx}
									className="mr-2"
									style={{ minWidth: 230, width: 230 }}
								>
									<JobCard job={job} />
								</div>
							))}
						</div>
					</section>
				</>
			</Breakpoint>
			<Breakpoint large up>
				<div className="container mx-auto">
					<div className="mx-auto w-3/4">
						<JobList title="Featured Jobs" jobs={jobData.slice(0, 3)} />
					</div>
				</div>
			</Breakpoint>
		</>
	);
};

export default JobsFeatured;
