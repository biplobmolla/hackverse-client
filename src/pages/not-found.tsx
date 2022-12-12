import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Button } from "lib";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="h-[calc(100vh-64px)] -translate-y-12 flex flex-col items-center justify-center">
			<div className="flex items-center">
				<h1 className="font-bold text-8xl">404</h1>
				<h3 className="ml-2">Page not found</h3>
			</div>
			<Link to="/">
				<Button
					icon={<ArrowLeftIcon className="w-5 h-5" />}
					className="mt-7 font-medium"
				>
					Go back to homepage
				</Button>
			</Link>
		</div>
	);
}
