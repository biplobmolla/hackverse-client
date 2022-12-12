import { Card, Input } from "lib";
import React from "react";

export default function Responsibilities() {
	return (
		<Card.Settings className="col-span-1">
			<Input
				type="textarea"
				label="Responsibilities"
				className="min-h-[120px]"
			/>
		</Card.Settings>
	);
}
