import { useAuth } from "hooks";

const Footer = () => {
	const { logout } = useAuth();

	return (
		<div className="bg-white">
			<div className="container mx-auto flex justify-between items-center py-3">
				<div className="flex items-center">
					<p className="font-medium">Products</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium">Resources</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium">FAQ</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium">Blog</p>
				</div>

				<div className="flex items-center">
					<p className="font-medium">Ⓒ 2022 Hackverse</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium">Privacy</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium">Terms</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium">Contact</p>
					<p className="px-1 font-medium">&middot;</p>
					<p className="font-medium cursor-pointer" onClick={logout}>
						Logout
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
