import React from "react";

export default function KeywordBox() {
	return (
		<div className="rounded-md p-5" style={{ background: "#E8F2FF" }}>
			<div>
				<h3 className="font-semibold text-lg">Search by keyword</h3>
				<p className="text-xs text-gray-600 mt-0.5">
					Create a job alert now and never miss a job
				</p>
			</div>
			<input
				id="default"
				type="text"
				name="default"
				placeholder="Enter job keyword"
				className="px-4 py-2 mt-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
			/>
			<button className="bg-primary-700 hover:bg-primary-800 text-white px-4 pt-1.5 pb-2 mt-3 rounded-md font-medium">
				Apply filter
			</button>
		</div>
	);
}
