import React from "react";
import { Breakpoint } from "react-socks";
import { SearchIcon } from "@heroicons/react/solid";
import HeaderBg from "assets/img/bg.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
	return (
		<>
			<Breakpoint medium down>
				<HeaderSmall />
			</Breakpoint>
			<Breakpoint large up>
				<HeaderLarge />
			</Breakpoint>
		</>
	);
};

export default Header;

export function HeaderSmall() {
	return (
		<>
			<section className="mx-auto hero-wrapper">
				<div className="relative h-10 w-full flex mt-5">
					<input
						type="search"
						name="serch"
						placeholder="Search for jobs"
						className="bg-white flex-1 px-3 pt-0.5 rounded shadow-sm text-sm focus:outline-none"
					/>
					<button
						type="submit"
						className="text-white w-10 h-full ml-3 flex items-center justify-center rounded"
						style={{ background: "#131313" }}
					>
						<svg
							className="h-4 w-4 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							id="Capa_1"
							x="0px"
							y="0px"
							viewBox="0 0 56.966 56.966"
							width="512px"
							height="512px"
						>
							<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
						</svg>
					</button>
				</div>
			</section>

			<style jsx>{`
				.hero-wrapper {
					width: 93%;
				}
			`}</style>
		</>
	);
}

function HeaderLarge() {
	const navigate = useNavigate();

	return (
		<div style={styles.header} className="bg-contain bg-center">
			<section className="h-80 mx-auto flex flex-col justify-center items-center bg-black/50">
				<h1 className="text-white text-4xl font-bold text-center capitalize mb-5">
					Find your dream job
				</h1>
				<div className="rounded-md flex px-3.5 items-center bg-white shadow-lg w-1/2 search-wrapper">
					<div className="flex-1 flex items-center ml-2">
						<SearchIcon className="w-5 h-5" />
						<input
							type="text"
							placeholder="Search for jobs"
							className="bg-transparent py-6 flex-1 ml-3 mr-4 focus:outline-none text-base font-medium"
						/>
					</div>
					<button
						className="bg-primary-700 hover:bg-primary-800 font-semibold text-white px-6 py-2.5 rounded-md"
						onClick={() => navigate("/jobs")}
					>
						Search
					</button>
				</div>
				<div className="text-white mt-4 w-2/5 text-center">
					Discover your next career move with over 15,000 opening vacancies,
					anywhere in the world or remotely.
				</div>
			</section>
		</div>
	);
}

const styles = {
	header: {
		background: `url(${HeaderBg})`,
	},
};
