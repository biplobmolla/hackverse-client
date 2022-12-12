import classNames from "classnames";
import React from "react";

type MenuItemProps = { children: any; className?: string };

export default function MenuItem({ children, className }: MenuItemProps) {
	return (
		<div
			className={classNames("px-6 py-3 rounded-xl font-semibold", className)}
		>
			{children}
		</div>
	);
}
