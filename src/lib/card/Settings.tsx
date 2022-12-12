import classNames from "classnames";
import React from "react";

export default function CardSettings({ children, className }: any) {
	return (
		<div
			className={classNames("bg-white shadow rounded-xl py-7 px-8", className)}
		>
			{children}
		</div>
	);
}