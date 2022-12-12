import { Checkbox } from "antd";
import React from "react";

type FilterBoxProps = {
	title: string;
	filters: string[];
	className?: string;
};

export default function FilterBox({
	title,
	filters,
	className,
}: FilterBoxProps) {
	return (
		<div className={className}>
			<h3 className="font-semibold text-base">{title}</h3>
			<div className="flex flex-col mt-1.5">
				{filters.map((filter) => (
					<div>
						<Checkbox onChange={() => {}} style={styles.checkbox}>
							{filter}
						</Checkbox>
					</div>
				))}
			</div>
		</div>
	);
}

const styles = {
	checkbox: {
		margin: "3.5px 0px",
	},
};
