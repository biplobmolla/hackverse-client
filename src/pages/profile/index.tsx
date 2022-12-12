import { Tabs } from "antd";
import React, { MouseEvent } from "react";
import { Breakpoint } from "react-socks";
import { aboutData, timeline, profileData, ProfileSkills } from "utils/data";
import InfoArea from "./views/InfoArea";
import SingleTimeline from "./views/SingleTimeline";
import profile_banner from "../../assets/img/profile_banner.png";
import ProfileInfoSection from "./views/ProfileInfoSection";
import SingleSkill from "./views/SingleSkill";

const { TabPane } = Tabs;

export default function Profile() {
	const handleLogout = (event: MouseEvent) => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
			<Breakpoint medium down>
				<div className="">
					<div className="relative profile-cover-img">
						<img
							src={profile_banner}
							alt="profile_banner"
							className="w-full h-36"
						/>
						<div className="absolute top-0 w-full h-36 bg-black opacity-50"></div>
					</div>
					<div className="profile-others">
						<div className="mb-8 bg-white px-5 pt-14 pb-5">
							<h3 className="text-xl font-bold">Jeremy Rose</h3>
							<p className="text-sm">Devops engineer who loves to automate</p>
						</div>
						<img
							src="https://i.imgur.com/ryybk8P.jpeg"
							alt="profile_img"
							className="w-24 rounded-full -mt-52 ml-5"
						/>
						<div className="mt-24">
							{profileData.map((data) => (
								<ProfileInfoSection data={data} />
							))}
						</div>
						<div className="bg-white px-5 py-5 mt-5">
							<h4 className="font-semibold text-sm mb-3">Skills</h4>
							<div className="flex flex-wrap">
								{ProfileSkills.map((skill) => (
									<SingleSkill skill={skill} />
								))}
							</div>
						</div>
						<div className="bg-white px-5 py-5 mt-5">
							<h4 className="font-semibold text-sm mb-3">Contact</h4>
							<div className="flex items-center">
								<div className="w-16">
									<i className="far fa-envelope text-2xl"></i>
								</div>
								<h6 className="text-xs font-semibold ml-4">
									{"jeremy@gmail.com"}
								</h6>
							</div>
						</div>
					</div>
				</div>
			</Breakpoint>
			<Breakpoint large up>
				<div className="mx-auto">
					<div className="lg:w-3/4 lg:mx-auto grid grid-cols-12 lg:gap-4">
						<div className="bg-white m-3 lg:mx-0 col-span-12 lg:col-span-3">
							<div className="pt-5 lg:pt-0 shadow-sm text-center lg:shadow-none">
								<img
									src="https://i.imgur.com/ryybk8P.jpeg"
									alt="profile"
									className="w-24 h-24 lg:w-full lg:h-60 object-cover inline rounded-full lg:rounded-none"
								/>
								<div className="py-3.5 text-center lg:text-left">
									<button
										className=" mt-3 py-2 px-3 bg-green-600 text-white rounded"
										onClick={handleLogout}
									>
										logout
									</button>
									<div className="flex items-end">
										<span className="text-xs font-semibold">WORK</span>
										<hr className="w-full mb-1 ml-2" />
									</div>
									<div className="flex mt-5 mb-2 justify-between items-start">
										<h3 className="text-xl font-semibold">Spotify New york</h3>
										{/* <span className="py-1 px-2 text-green-600 font-semibold rounded  bg-blue-50">Primary</span> */}
									</div>
									<span className="text-xs">170 William Street</span>
									<br />
									<span className="text-xs">
										New York, NY 10651-78 156-45-384
									</span>

									{/* <div className="flex mt-4 mb-2 items-start  justify-between">
									<h3 className="text-xl font-semibold">Metropoliton Museum</h3>
									<span className="py-1 px-2 text-green-600 font-semibold rounded  bg-green-50">Secondary</span>
								</div> */}
									{/* <span className="text-xs">170 William Street</span><br />
								<span className="text-xs">New York, NY 10651-78 156-45-384</span> */}
									<div className="flex items-end mt-5">
										<span className="text-xs font-semibold">SKILLS</span>
										<hr className="w-full mb-1 ml-2" />
									</div>
									<div className="text-base font-semibold mt-5">
										<h3>Branding</h3>
										<h3>UI/UX</h3>
										<h3>Web-Design</h3>
										<h3>Packaging</h3>
										<h3>Print & Editorial</h3>
									</div>
								</div>
							</div>
						</div>

						<div className=" m-3 lg:mx-0 px-4 shadow-sm lg:shadow-none bg-white col-span-12 lg:col-span-9">
							<div className="flex justify-between items-center">
								<div className="flex items-end">
									<h3 className="text-2xl font-semibold">Jeremy Rose</h3>
									<div className="flex items-center ml-4 mb-1 text-gray-500">
										<i className="fas fa-map-marker-alt text-xs"></i>
										<span className=" text-xs font-semibold ml-1">
											New York, NY
										</span>
									</div>
								</div>
								{/* <div className="flex items-center text-gray-500">
								<i className="fas fa-bookmark text-sm"></i>
								<span className="text-sm ml-1 font-semibold">Bookmark</span>
							</div> */}
							</div>
							<h3 className="text-sm text-blue-500 font-semibold mb-5">
								Product Designer
							</h3>
							{/* <div className="mt-4">
							<h3 className="text-sm font-semibold text-gray-500">RANKINGS</h3>
							<div className="flex items-center">
								<h3 className="text-lg font-semibold">8,6</h3>
								<Rate disabled className="mb-1 ml-2" allowHalf defaultValue={3.5} style={{color:"blue"}} />
							</div>
						</div>
						<div className="flex items-center mt-4 mb-4 w-1/2 justify-between">
							<div className="flex items-center">
								<i className="fas fa-envelope text-sm text-gray-600"></i>
								<span className=" text-sm ml-2 font-semibold text-gray-600">Send Message</span>
							</div>
							<div  className="py-1 px-2 text-green-600 font-semibold rounded  bg-green-50">
								<i className="fas fa-check mr-2"></i>
								<span>Contacts</span>
							</div>
							<div>
								<span className=" text-sm font-semibold text-gray-600">Report user</span>
							</div>
						</div> */}
							<Tabs defaultActiveKey="timeline" onChange={() => {}}>
								<TabPane
									tab={
										<span>
											<i className="fas fa-stream mr-2"></i>Timeline
										</span>
									}
									key="timeline"
								>
									<SingleTimeline
										title="Experience"
										data={timeline.experiences}
									/>
								</TabPane>
								<TabPane
									tab={
										<span>
											<i className="fas fa-user mr-2"></i>
											About
										</span>
									}
									key="about"
								>
									<InfoArea
										title="Contact Information"
										data={aboutData.contact}
									/>
									<InfoArea title="Basic Information" data={aboutData.basic} />
								</TabPane>
							</Tabs>
						</div>
					</div>
				</div>
			</Breakpoint>
		</>
	);
}
