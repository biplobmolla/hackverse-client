import { Button } from "lib";
import { Link } from "react-router-dom";
import { LandingFeatureSet } from "templates";

export default function ForEmployers() {
	return (
		<>
			<LandingFeatureSet {...INFO} />
		</>
	);
}

const INFO = {
	title: "One Stop Solution to Hire Talents",
	subtitle:
		"Welcome to the Country's First HR & People Management SaaS Platform - Transparent, Visible and Streamlined",
	actionNode: (
		<div className="mt-6 flex">
			<Link to="/join?for=employers">
				<Button className="font-semibold px-6 shadow">Start Hiring</Button>
			</Link>
			<Button className="font-semibold px-6 !bg-gray-200 hover:!bg-gray-300 shadow text-black hover:text-black ml-2">
				Learn More
			</Button>
		</div>
	),
	features: [
		{
			thumb:
				"https://res.cloudinary.com/shakilahmmeed/image/upload/v1649356072/verified_vzvegr.png",
			title: "List Open Positions",
			description:
				"Build job postings that describe careers in your company to prospective applicants.",
		},
		{
			thumb:
				"https://res.cloudinary.com/shakilahmmeed/image/upload/v1649356072/magic-wand_be2ito.png",
			title: "Experience a Smooth Recruition",
			description:
				"Make the best hire with our systematic recruiting process which enables you to test the aptitude of your candidates, track their applications and schedule interviews with zero hassle.",
		},
		{
			thumb:
				"https://res.cloudinary.com/shakilahmmeed/image/upload/v1649356072/calendar_qe5rma.png",
			title: "Check Availability",
			description:
				"View interviewer availability while scheduling interviews with Google Calendar and Office 365.",
		},
	],
	banner:
		"https://www.glassdoor.com/employers/app/uploads/sites/2/2021/02/640X469_Guide-to-Building-a-Diversity-Equity-and-Inclusion-Program-at-Your-Company-02-1280x992.png?x60772",
};
