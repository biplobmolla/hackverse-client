import * as React from "react";
import { Link } from "react-router-dom";

const CategoryBrowser = () => {
	return (
		<div className="mx-auto mt-12 mb-16">
			<div className="mx-auto w-3/4">
				<div className="flex justify-between items-center px-5 lg:px-0">
					<h2 className="font-bold text-xl lg:text-2xl">Browse Categories</h2>
				</div>

				<div className="grid grid-cols-5 gap-12 mt-8">
					{CATEGORIES.map((category) => (
						<Link
							key={category.slug}
							to={`/jobs?category=${category.slug}`}
							className="col-span-1 flex flex-col items-center"
						>
							<img src={category.icon} alt="icon" className="w-14 h-14" />
							<h4 className="text-base mt-2.5">{category.name}</h4>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default CategoryBrowser;

const CATEGORIES = [
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359986/software_mnscwg.png",
		name: "Software Development",
		slug: "software-development",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359755/graphics_m3misq.png",
		name: "Graphics & Design",
		slug: "graphics-design",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359726/digital-marketing_vkl5jc.png",
		name: "Digital Marketing",
		slug: "digital-marketing",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359726/writing_ortq3c.png",
		name: "Writing & Translation",
		slug: "writing-translation",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359986/video_facqu5.png",
		name: "Video & Animation",
		slug: "video-animation",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359726/music_auyvq1.png",
		name: "Music & Audio",
		slug: "music-audio",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359986/game_euhilb.png",
		name: "Game Development",
		slug: "game-development",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359726/aiml_y5ta4z.png",
		name: "AI & ML",
		slug: "ai-ml",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359726/cloud_e0hdha.png",
		name: "Cloud & DevOps",
		slug: "cloud-devops",
	},
	{
		icon: "https://res.cloudinary.com/shakilahmmeed/image/upload/v1649359986/blockchain_dwykkx.png",
		name: "Blockchain",
		slug: "blockchain",
	},
];
