import { Card, Input } from "lib";
import React from "react";

export default function Qualifications() {
	return (
		<Card.Settings className="col-span-1">
			<Input type="textarea" label="Qualifications" className="min-h-[120px]" />
		</Card.Settings>
	);
}
