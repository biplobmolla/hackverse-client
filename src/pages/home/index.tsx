import { LoginOutlined } from "@ant-design/icons";
import { Button } from "lib";
import { Breakpoint } from "react-socks";
import useHome from "./Home.actions";
import CategoryBrowser from "./views/CategoryBrowser";
import Header, { HeaderSmall } from "./views/Header";
import JobList from "./views/JobList";
import JobsFeatured from "./views/JobsFeatured";

export default function Home() {
	const { jobs } = useHome();

	return (
		<>
			<Breakpoint large up>
				<Header />
				<CategoryBrowser />
			</Breakpoint>

			<Breakpoint medium down>
				<div className="px-5 pt-8">
					<div className="font-medium text-gray-500 text-base">
						Good morning Alex
					</div>
					<h3 className="font-bold text-4xl">
						Find your <br />
						creative job
					</h3>
				</div>
				<HeaderSmall />
				<div className="mt-1">
					<JobsFeatured />
				</div>
			</Breakpoint>

			<div className="mt-1 lg:mx-auto lg:w-3/4 pb-4 lg:pb-16">
				<JobList title="Recommended Jobs" jobs={jobs} />
				<Button
					icon={<LoginOutlined className="-translate-y-0.5" />}
					className="mt-4 lg:mt-10 mx-auto rounded-full px-7 font-semibold "
				>
					Login for more jobs
				</Button>
			</div>
		</>
	);
}
