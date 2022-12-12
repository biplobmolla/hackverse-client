import { Button } from "lib";
import { Link } from "react-router-dom";
import { LandingFeatureSet } from "templates";

export default function ForTalents() {
	return (
		<>
			<LandingFeatureSet {...INFO} />
		</>
	);
}

const INFO = {
	title: "Match with your dream companies",
	subtitle:
		"Find the best career for you based on your skills, education, and levels of experience.",
	actionNode: (
		<div className="mt-6 flex">
			<Link to="/join?for=talents">
				<Button className="font-semibold px-6 shadow">Start Applying</Button>
			</Link>
			<Button className="font-semibold px-6 !bg-gray-200 hover:!bg-gray-300 shadow text-black hover:text-black ml-2">
				Learn More
			</Button>
		</div>
	),
	features: [
		{
			thumb:
				"https://res.cloudinary.com/shakilahmmeed/image/upload/v1649356736/documents_ccac6g.png",
			title: "List Open Positions",
			description:
				"Build job postings that describe careers in your company to prospective applicants.",
		},
		{
			thumb:
				"https://res.cloudinary.com/shakilahmmeed/image/upload/v1649356625/test-tubes_ckawim.png",
			title: "Experience a Smooth Recruition",
			description:
				"Make the best hire with our systematic recruiting process which enables you to test the aptitude of your candidates, track their applications and schedule interviews with zero hassle.",
		},
		{
			thumb:
				"https://res.cloudinary.com/shakilahmmeed/image/upload/v1649356624/hackathon_e8ugfu.png",
			title: "Check Availability",
			description:
				"View interviewer availability while scheduling interviews with Google Calendar and Office 365.",
		},
	],
	banner:
		"https://www.glassdoor.com/employers/app/uploads/sites/2/2021/02/GoogleDrive_640X469_Amplifying-Employee-Stories-to-Your-Glassdoor-Company-Profile-02-1280x992.png",
};
