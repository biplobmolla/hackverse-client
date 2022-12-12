import classNames from "classnames";
import React from "react";

type ButtonProps = {
	children: any;
	className?: string;
	icon?: any;
	onClick?: any;
};

export default function Button({ children, className, icon, onClick }: ButtonProps) {
	return (
		<button
			className={classNames(
				"bg-primary-700 hover:bg-primary-800 text-white font-semibold px-3 py-2.5 rounded-md flex items-center",
				className
			)}
			onClick={onClick}
		>
			{icon ? <span className="mr-2">{icon}</span> : null}
			{children}
		</button>
	);
}
