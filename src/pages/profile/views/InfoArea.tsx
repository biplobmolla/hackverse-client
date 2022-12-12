import React from "react";

export default function InfoArea({ data, title }: any) {
	return (
		<div className="pb-3">
			<div className="opacity-70 text-xs font-semibold uppercase">{title}</div>
			<div className="mt-2.5">
				{Object.keys(data)?.map((key: any) => (
					<div className="flex mb-0.5">
						<div className="w-1/4 capitalize">{key}</div>
						<div className="w-3/4">{data[key]}</div>
					</div>
				))}
			</div>
		</div>
	);
}
