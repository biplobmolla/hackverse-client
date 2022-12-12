import React from "react";

type LandingFeatureSetProps = {
	title: string;
	subtitle: string;
	actionNode: React.ReactElement;
	features: { thumb: string; title: string; description: string }[];
	banner: string;
};

export default function LandingFeatureSet({
	title,
	subtitle,
	actionNode,
	features,
	banner,
}: LandingFeatureSetProps) {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-12 gap-28 mx-32 py-10">
				<div className="col-span-6 mt-32">
					<h1 className="text-5xl font-bold">{title}</h1>
					<p className="mt-3 text-base">{subtitle}</p>
					{actionNode}
				</div>
				<div className="col-span-6">
					<img src={banner} alt="banner" />
				</div>
			</div>
			<div className="grid grid-cols-12 gap-5 pt-6 pb-10">
				{features.map((feature) => (
					<div className="col-span-4 bg-gray-50 rounded-md shadow p-7">
						<img src={feature.thumb} alt="feature" className="w-20 h-20" />
						<div className="mt-7">
							<h3 className="font-semibold text-xl">{feature.title}</h3>
							<p className="text-sm mt-1.5">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
