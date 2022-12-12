import React from "react";
import EmailPreferences, { EmailPreferencesProps } from "./EmailPreferences";
import StatusEmail, { StatusEmailProps } from "./StatusEmail";

// NOT IN USE
export default function Email() {
	return (
		<section className="my-3 lg:px-5">
			<header>
				<h3 className="text-xl">Emails</h3>
				<hr className=" my-3 border-0.5 border-gray-300" />
			</header>
			<main className="emails">
				<div className="first-item rounded border-gray-400 bg-white shadow">
					<div className="border-t border-gray-400 border-opacity-50">
						<div className="my-3 p-5">
							<div className="flex mb-3">
								<h3 className="text-base font-bold">nazmul2018s@gmail.com</h3>
								<span className="mx-1 self-center">–</span>
								<span className="text-base font-semibold text-green-500">
									Primary
								</span>
							</div>
							<ul className="list-disc ml-6 space-y-0.5">
								<li>Not visible in emails </li>
								<li>Receives notifications </li>
							</ul>
						</div>
					</div>
				</div>
				<form>
					<label
						htmlFor="email"
						className="block my-3 text-base font-medium text-gray-600 dark:text-gray-400"
					>
						Add email address
					</label>
					<div className="flex">
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Email address"
							className="w-80 mr-3 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
							onChange={(e) => {}}
						/>
						<button
							type="submit"
							className="px-3 py-2 text-sm font-medium bg-white rounded-md border hover:bg-gray-300 focus:outline-none duration-100 ease-in-out"
						>
							Add
						</button>
					</div>
				</form>
				{data.map((item) => (
					<>
						<hr className="my-3 border-0.5 border-gray-300" />
						<StatusEmail
							title={item.title}
							message={item.message}
							selectName={item.selectName}
							options={item.options}
						/>
					</>
				))}
				<hr className=" my-3 border-0.5 border-gray-300" />
				<div>
					<form className="mx-5 my-5">
						<label className="text-sm font-medium my-3 block">
							<input
								type="checkbox"
								name="private"
								id="private"
								value="false"
							/>
							Keep my email addresses private
						</label>
						<p className="text-xs">
							We’ll remove your public profile email and use
							58416190+nazmul53p@users.noreply.github.com when performing
							web-based Git operations (e.g. edits and merges) and sending email
							on your behalf. If you want command line Git operations to use
							your private email you must set your email in Git.
						</p>
						<p className="mt-3 text-xs">
							Commits pushed to GitHub using this email will still be associated
							with your account.
						</p>
					</form>
					<form className="mx-5 my-5">
						<label className="text-sm font-medium my-3 block">
							<input type="checkbox" name="block" id="block" value="false" />
							Block command line pushes that expose my email
						</label>
						<p className="text-xs">
							When you push to GitHub, we’ll check the most recent commit. If
							the author email on that commit is a private email on your GitHub
							account, we will block the push and warn you about exposing your
							private email.
						</p>
					</form>
				</div>
				<h3 className="mt-3 text-base font-medium">Email preferences</h3>
				<hr className=" my-3 border-0.5 border-gray-300" />
				{emailPreferences.map((item) => (
					<EmailPreferences title={item.title} message={item.message} />
				))}
			</main>
			<style jsx>{`
				.first-item div:first-child {
					border-top-width: 0px;
				}
				.emails form label input {
					margin: 5px 5px 0 -20px;
					float: left;
				}
			`}</style>
		</section>
	);
}

const data: StatusEmailProps[] = [
	{
		title: "Primary email address",
		message:
			"Because you have email privacy enabled, 123456@gmail.com will be used for account-related notifications as well as password resets. 58416190+123456@users.noreply.github.com will be used for web-based Git operations, e.g., edits and merges.",
		selectName: "primaryEmail",
		options: [
			{
				value: "2018s@gmail.com",
				selected: true,
				optionValue: "89488022",
			},
			{
				value: "15-9934@diu.edu.bd",
				optionValue: "89488023",
			},
		],
	},
	{
		title: "Backup email address",
		message:
			"Your backup GitHub email address will be used as an additional destination for security-relevant account notifications and can also be used for password resets.",
		selectName: "backupEmail",
		options: [
			{
				value: "Allow all verified emails",
				selected: true,
				optionValue: "all",
			},
			{
				value: "Only allow primary email",
				optionValue: "primaryOnly",
			},
			{
				value: "15-9934@diu.edu.bd",
				optionValue: "132521716",
			},
		],
	},
];

const emailPreferences: EmailPreferencesProps[] = [
	{
		title: "Receive all emails, except those I unsubscribe from.",
		message:
			"We’ll occasionally contact you with the latest news and happenings from the GitHub Universe.",
	},
	{
		title: "Only receive account related emails, and those I subscribe to.",
		message:
			"We’ll only send you legal or administrative emails, and any emails you’re specifically subscribed to.",
	},
];
