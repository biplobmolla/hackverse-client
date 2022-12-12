import React from "react";
import { useParams } from "react-router-dom";

export default function JobsView() {
	const { id } = useParams();

	return <div>view {id}</div>;
}
