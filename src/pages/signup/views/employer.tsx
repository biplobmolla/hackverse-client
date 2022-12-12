import { LoadingOutlined } from "@ant-design/icons";
import { Divider, message } from "antd";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "services/auth";
import { SignupFormDataT } from "types";
import storage from "utils/storage";

type PassCheckerStyle = {
	color: string;
	display: string;
};

const EmployerSignUp = () => {
	const navigate = useNavigate();
	const [userdata, setUserdata] = useState<SignupFormDataT>(initialUserData);
	const [passwordChecker, setPasswordChecker] =
		useState<PassCheckerStyle>(initialDesign);
	const signUpHandler = useMutation(createAccount);

	const loadData = (e: React.FormEvent<HTMLInputElement>): void => {
		const data: SignupFormDataT = { ...userdata };
		data[e.currentTarget.name as keyof SignupFormDataT] = e.currentTarget.value;
		setUserdata(data);
		setPasswordChecker({ color: "", display: "none" });
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isValidUserData(userdata)) {
			try {
				await signUpHandler.mutateAsync({
					...userdata,
					username:
						(userdata.first_name + userdata.last_name).toLowerCase() +
						Date.now(),
				});
				storage.set("regEmail", userdata.email);
				navigate("/verify");
			} catch (err: any) {
				message.error(err.response.data.detail);
			}
		} else {
			setPasswordChecker({
				color: "red",
				display: "block",
			});
		}
	};

	return (
		<div className="flex justify-center items-center h-app-screen bg-gray-100">
			<div className="container max-w-xl border border-gray-200 p-3 rounded-md bg-white sm:mx-8">
				<div className="text-center my-6">
					<h1 className="text-3xl font-semibold text-gray-700">Sign up</h1>
					<p className="text-gray-500 py-2">Join us free and start hiring</p>
				</div>

				<div className="m-6">
					<form className="mb-4" onSubmit={onSubmit}>
						<div className="mb-6">
							<label
								htmlFor="company-name"
								className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
							>
								Company name
							</label>
							<input
								type="text"
								name="name"
								id="company-name"
								required
								placeholder="Company name"
								className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
								onChange={loadData}
								value={userdata.name}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="company-name"
								className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
							>
								Company size
							</label>
							<select
								name="company-size"
								id="company-size"
								required
								className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
								// @ts-ignore
								onChange={loadData}
							>
								<option value="" disabled hidden>
									Select company size
								</option>
								<option>1-10</option>
								<option>10-50</option>
								<option>50-300</option>
								<option>300+</option>
							</select>
						</div>
						<Divider />
						<div className="mb-6 flex">
							<div className="w-1/2 mr-4">
								<label
									htmlFor="first_name"
									className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
								>
									First Name
								</label>
								<input
									type="text"
									name="first_name"
									id="first_name"
									placeholder="First Name"
									className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									onChange={loadData}
									value={userdata.first_name}
								/>
							</div>

							<div className="w-1/2">
								<label
									htmlFor="last_name"
									className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
								>
									Last Name
								</label>
								<input
									type="text"
									name="last_name"
									id="last_name"
									placeholder="First Name"
									className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									onChange={loadData}
									value={userdata.last_name}
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
							>
								Email address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								placeholder="Email address"
								className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
								onChange={loadData}
								value={userdata.email}
							/>
						</div>

						<div className="flex">
							<div className="w-1/2 mb-6 mr-4">
								<div className="flex justify-between mb-2">
									<label
										htmlFor="password"
										className="text-sm text-gray-600 dark:text-gray-400"
									>
										Password
									</label>
								</div>
								<input
									type="password"
									name="password"
									id="password"
									required
									placeholder="Password"
									className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									onChange={loadData}
									value={userdata.password}
								/>
							</div>

							<div className="w-1/2 mb-6">
								<div className="flex justify-between mb-2">
									<label
										htmlFor="confirm_password"
										className="text-sm text-gray-600 dark:text-gray-400"
									>
										Confirm password
									</label>
								</div>
								<input
									type="password"
									name="confirm_password"
									id="confirm_password"
									required
									placeholder="Confirm password"
									className="w-full px-3 py-2 placeholder-gray-600 border bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
									onChange={loadData}
									value={userdata.confirm_password}
								/>
								<div>
									<p
										className="absolute pl-1 font-semibold"
										style={passwordChecker}
									>
										{userdata.password !== userdata.confirm_password &&
											"Not Matched"}
									</p>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<button
								type="submit"
								className="w-full p-3 text-white font-semibold bg-primary-700 hover:bg-primary-800 rounded-md focus:outline-none"
							>
								{signUpHandler.isLoading ? (
									<div className="flex items-center justify-center">
										<LoadingOutlined className="mr-2" />
										Signing up...
									</div>
								) : (
									"Sign up"
								)}
							</button>
						</div>
						<p className="text-sm text-center text-gray-400">
							Already have an account?
							<Link to="/login" className="font-semibold ml-1.5">
								Sign in
							</Link>
						</p>
					</form>
					{/* <SocialLogin /> */}
				</div>
			</div>
		</div>
	);
};

export default EmployerSignUp;

const initialUserData = {
	first_name: "",
	last_name: "",
	username: "",
	email: "",
	password: "",
	confirm_password: "",
	name: "",
	category: [1],
};

const initialDesign = {
	color: "",
	display: "none",
};

const isValidUserData = (userdata: SignupFormDataT) => {
	return (
		userdata.password === userdata.confirm_password && userdata.confirm_password
	);
};
