import React from "react";

export default function SingleTimeline({ title, data }: any) {
	return (
		<div className="pb-3">
			<h4 className="font-semibold text-lg">{title}</h4>
			<div className="mt-2">
				{data?.map((item: any) => (
					<div className="grid grid-cols-12 gap-4 mb-4">
						<div className="col-span-2 lg:col-span-2">
							<img
								src={item.logo}
								alt="company logo"
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="col-span-10">
							<div className="font-semibold">{item.position}</div>
							<div className="font-sm">{item.company}</div>
							<div className="opacity-80 text-xs">{item.timeline}</div>
							<div className="opacity-80 text-xs mt-0.5">{item.location}</div>
							<hr className="mt-2.5" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
