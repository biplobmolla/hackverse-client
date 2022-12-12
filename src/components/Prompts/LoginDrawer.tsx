import { Drawer } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { requireAuth } from "store/auth";

export default function LoginDrawer() {
	const { authRequired } = useSelector((state: RootState) => state.auth);

	return (
		<>
			<Drawer
				placement="bottom"
				onClose={() => requireAuth(false)}
				visible={authRequired}
				width={window.innerWidth}
				closeIcon={null}
				height={234}
				bodyStyle={{ padding: "30px 15px" }}
				className="drawer-login"
			>
				<button
					className=" rounded w-full py-3.5 text-white mb-3"
					style={{ background: "#131313" }}
				>
					<i className="far fa-envelope mr-3"></i> Login with Email
				</button>
				<button
					className="rounded w-full py-3.5 text-white mb-3"
					style={{ background: "#1777f2" }}
				>
					<i className="fab fa-facebook-f mr-3"></i>
					Login with Facebook
				</button>
				<button
					className="rounded w-full py-3.5 text-white"
					style={{ background: "#d74937" }}
				>
					<i className="fab fa-google mr-3"></i>
					Login with Google
				</button>
			</Drawer>

			<style>{`
				.drawer-login .ant-drawer-content {
					border-radius: 15px 15px 0px 0px;
				}
			`}</style>
		</>
	);
}
