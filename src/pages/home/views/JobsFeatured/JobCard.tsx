import _ from "lodash";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime);

type JobCardProps = {
	job: any;
};

export default function JobCard({ job }: JobCardProps) {
	return (
		<>
			<Link to="/job">
				<div className="text-white shadow-sm rounded-lg inline-block p-4 w-full job-card">
					<h3 className="text-white font-semibold text-xl">
						{_.truncate(job.title, { length: 20 })}
					</h3>
					<div className="text-gray-300">
						$40k-90k/year
						<span className="px-1.5 ml-2 text-xs rounded-sm tag">
							Full Time
						</span>
					</div>
					<div className="flex justify-between mt-5">
						<div className="flex">
							<img
								src={job.company.logo}
								alt="company-logo"
								className="w-8 h-8 object-cover rounded-lg"
							/>
							<div className="text-xs ml-2">
								<span>{_.truncate(job.company.name, { length: 15 })}</span>
								<br />
								<span>{_.truncate(job.company.location, { length: 15 })}</span>
							</div>
						</div>
						<div className="text-xs self-end text-red-700">
							{dayjs(job.endDate).fromNow(true)} left
						</div>
					</div>
				</div>
			</Link>
			<style jsx>{`
				.job-card {
					background: #131313;
				}

				.tag {
					background: #3d3d3d;
				}
			`}</style>
		</>
	);
}
