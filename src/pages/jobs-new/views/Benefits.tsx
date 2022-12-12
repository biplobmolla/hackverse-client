import { Card, Input } from "lib";
import React from "react";

export default function Benefits() {
	return (
		<Card.Settings className="col-span-1">
			<Input type="textarea" label="Benefits" className="min-h-[120px]" />
		</Card.Settings>
	);
}
