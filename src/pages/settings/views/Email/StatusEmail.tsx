import React from "react";

export interface StatusEmailProps {
	title: string;
	message: string;
	selectName: string;
	options: Option[];
}

interface Option {
	value: string;
	selected?: boolean;
	optionValue: string;
}

export default function StatusEmail({
	title,
	message,
	selectName,
	options,
}: StatusEmailProps) {
	return (
		<div>
			<h3 className="mt-3 text-base font-medium">{title}</h3>
			<p className="my-3 text-sm">{message}</p>
			<form className="flex">
				<select
					id={selectName}
					name={selectName}
					className="w-80 mr-3 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
				>
					{options.map((option) => (
						<>
							<option selected={option?.selected} value={option.optionValue}>
								{option.value}
							</option>
						</>
					))}
				</select>
				<button
					type="submit"
					className="px-3 py-2 text-sm font-medium bg-white rounded-md border hover:bg-gray-300 focus:outline-none duration-100 ease-in-out"
				>
					Save
				</button>
			</form>
		</div>
	);
}
