import classNames from "classnames";
import { Button, Menu } from "lib";
import Benefits from "./views/Benefits";
import Informations from "./views/Informations";
import Qualifications from "./views/Qualifications";
import Responsibilities from "./views/Responsibilities";

// enum MENU_ITEM {
// 	INFORMATIONS = "INFORMATIONS",
// 	RESPONSIBILITIES = "RESPONSIBILITIES",
// 	QUALIFICATIONS = "QUALIFICATIONS",
// 	BENEFITS = "BENEFITS",
// }

export default function JobsNew() {
	// const [activeMenu, setActiveMenu] = useState(MENU_ITEM.INFORMATIONS);

	return (
		<div>
			<div className="flex items-center justify-between stickyy top-[88px] z-[999]">
				<h2 className="text-xl font-semibold">Post a new job</h2>
				<div className="col-span-1 flex justify-end">
					<div className="flex items-center gap-2">
						<Button className="bg-slate-200 hover:bg-slate-300 text-[#2B3548] py-2">
							Save as draft
						</Button>
						<Button className="py-2">Publish</Button>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-7 mt-4">
				<div className="col-span-3">
					<div className="sticky top-[88px]">
						<Menu>
							{navItems.map((item, idx) => (
								<Menu.Item
									key={idx}
									className={classNames({
										"bg-slate-100 block rounded-xl": false,
									})}
								>
									{item.title}
								</Menu.Item>
							))}
						</Menu>
					</div>
				</div>
				<div className="col-span-9 grid grid-cols-1 gap-y-3">
					<Informations />
					<Responsibilities />
					<Qualifications />
					<Benefits />
				</div>
			</div>
		</div>
	);
}

const navItems = [
	{ key: "informations", title: "1. Informations" },
	{ key: "responsibilities", title: "2. Responsibilities" },
	{ key: "qualifications", title: "3. Qualifications" },
	{ key: "benefits", title: "4. Benefits" },
];
