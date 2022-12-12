import { useEffect, useState } from "react";
import { jobData } from "utils/data";

export default function useHome() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return { loading, jobs: jobData };
}
