import { Button } from "lib";
import React from "react";
import FilterBox from "./FilterBox";
import KeywordBox from "./KeywordBox";

export default function Filters() {
	return (
		<div
			className="overflow-y-auto pr-2.5"
			style={{ height: "calc(100vh - 110px)" }}
		>
			<div>
				<KeywordBox />
				<div className="my-6">
					<FilterBox
						title="Type of employment"
						filters={EMPLOYMENT_TYPES}
						className="my-4"
					/>
					<FilterBox
						title="Seniority Level"
						filters={SENIORITY_lEVEL}
						className="my-4"
					/>
					<FilterBox
						title="Salary Range"
						filters={SALARY_RANGE}
						className="my-4"
					/>
				</div>
			</div>
			<Button className="w-full justify-center font-medium bg-slate-200 hover:bg-slate-200 text-black">
				Use advanced filter
			</Button>
		</div>
	);
}

const EMPLOYMENT_TYPES = [
	"Full Time",
	"Part Time",
	"Remote",
	"Internship",
	"Contract",
];

const SENIORITY_lEVEL = [
	"Entry Level",
	"Mid Level",
	"Senior Level",
	"Executive",
];

const SALARY_RANGE = [
	"৳700 - ৳1000",
	"৳1000 - ৳1200",
	"৳1200 - ৳1400",
	"৳1500 - ৳1800",
];
