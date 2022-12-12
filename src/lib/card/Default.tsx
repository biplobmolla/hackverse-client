import React from "react";
import { Card as AntCard, CardProps } from "antd";
import classNames from "classnames";

export default function CardDefault({ className, ...rest }: CardProps) {
	return (
		<div className="lib-card">
			<AntCard className={classNames("rounded-md", className)} {...rest} />
		</div>
	);
}
