import { message } from "antd";
import { Icons } from "components";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSignin } from "services/auth";
import { loadUser, setUser } from "store/auth";
import { SigninDataT } from "types";
import storage from "utils/storage";

const INITIAL_LOGIN_DATA = {
	username: "",
	password: "",
};

const SignIn = () => {
	const [data, setData] = useState<SigninDataT>(INITIAL_LOGIN_DATA);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const loginHandler = useMutation(handleSignin);
	const dispatch = useDispatch();

	const userData = (e: React.FormEvent<HTMLInputElement>) => {
		const userdata: SigninDataT = { ...data };
		userdata[e.currentTarget.id as keyof SigninDataT] = e.currentTarget.value;
		setData(userdata);
		setError("");
	};

	const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const resp = await loginHandler.mutateAsync(data);
			storage.set("UserInfo", resp.data);
			storage.set("token", resp.data.token);
			dispatch(setUser(resp.data));
			navigate("/dashboard");
		} catch (err: any) {
			message.error("Something wen't wrong");
		}
	};

	return (
		<div className="flex justify-center items-center h-app-screen bg-gray-100">
			<div className="container max-w-md border border-gray-200 rounded-md p-3 bg-white -translate-y-16">
				<div className="text-center my-6">
					<h1 className="text-3xl font-semibold text-gray-700">Sign in</h1>
					<p className="text-gray-500 pt-2 pb-4">
						Sign in to access your account
					</p>
				</div>

				<div className="m-6">
					<form className="mb-4" onSubmit={submitData}>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
							>
								Username or email
							</label>
							<input
								type="text"
								name="username"
								id="username"
								placeholder="Enter username or email"
								className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300"
								required
								onChange={userData}
							/>
						</div>
						<div className="mb-6">
							<div className="flex items-center justify-between mb-2">
								<label
									htmlFor="password"
									className="text-sm text-gray-600 dark:text-gray-400"
								>
									Password
								</label>
								<Link
									to="/forget-password-email"
									className="text-xs text-gray-400 focus:outline-none"
								>
									Forgot password?
								</Link>
							</div>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
								required
								onChange={userData}
							/>
						</div>
						<p className="text-sm font-medium text-red-600 mb-4">{error}</p>
						<div className="mb-6">
							<button
								type="submit"
								className="w-full p-3 text-white font-semibold bg-primary-700 hover:bg-primary-800 rounded-md focus:outline-none"
							>
								Sign in
							</button>
						</div>
						<p className="text-sm text-center text-gray-400">
							Don't have an account yet?
							<Link to="/join" className="font-semibold ml-1.5">
								Sign up
							</Link>
						</p>
					</form>
					{/* <SocialLogin /> */}
				</div>
			</div>
		</div>
	);
};

export default SignIn;

export const SocialLogin = () => {
	return (
		<div>
			<div className="flex flex-row justify-center mb-8">
				<span className="absolute bg-white px-4 text-gray-500">
					or sign in with
				</span>
				<div className="w-full bg-gray-200 mt-3 h-px"></div>
			</div>
			<div className="flex flex-row gap-2">
				<button className="text-white w-full p-2 rounded-md bg-blue-500 hover:bg-blue-600 flex items-center justify-center">
					<Icons.Google style={{ marginRight: 7 }} />
					Google
				</button>
				<button className="text-white w-full p-2 rounded-md bg-gray-800 hover:bg-gray-900 flex items-center justify-center">
					<Icons.GitHub style={{ marginRight: 7 }} />
					Github
				</button>
			</div>
		</div>
	);
};
