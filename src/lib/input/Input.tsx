import classNames from "classnames";
import React from "react";

export type InputProps = {
	type?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	className?: string;
	name?: string;
	onChange?: any;
};

export default function Input({
	type,
	label,
	placeholder,
	value,
	className,
	name,
	onChange,
}: InputProps) {
	const inputClass =
		"border border-gray-300 text-gray-700 text-sm font-medium rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-2.5 px-3";

	return (
		<div>
			{label && (
				<label className="block mb-2 text-sm font-medium text-gray-900">
					{label}
				</label>
			)}
			{type === "textarea" ? (
				<textarea
					value={value}
					placeholder={placeholder}
					className={classNames(inputClass, className)}
				></textarea>
			) : (
				<input
					type={type}
					value={value}
					className={classNames(inputClass, className)}
					placeholder={placeholder}
					name={name}
					onChange={onChange}
				/>
			)}
		</div>
	);
}

Input.defaultProps = {
	type: "text",
};
