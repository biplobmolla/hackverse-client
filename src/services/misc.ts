import { AccountsDataT, JobDataT, ProfileDataT } from "types";
import coreAxios from "utils/axios";

export const handleJobCreate = async (jobData: JobDataT) => {
	try {
		const result = await coreAxios.post("/jobs/job-view/", jobData);
		return result;
	} catch (error: any) {
		console.log(error);

		return error.response.data;
	}
};

export const handleUpdateProfile = async (
	profileData: ProfileDataT | AccountsDataT,
	username: string
) => {
	console.log("profileData ", profileData);
	console.log("username ", username);

	try {
		const result = await coreAxios.put(
			`/accounts/profile_details_view/${username}/`,
			profileData
		);
		console.log(result);
		console.log(result.data);

		return result;
	} catch (error: any) {
		console.log(error);
		return error;
	}
};

export const handleCompanyJobList = async (id: number) => {
	try {
		const result = await coreAxios.get(`/jobs/job-details-for-company/${id}`);

		return result;
	} catch (error: any) {
		console.log(error);
	}
};

export const handleLoadUserCompany = async () => {
	try {
		const result = await coreAxios.get(`/accounts/company/`);

		return result;
	} catch (error: any) {
		console.log(error);
	}
};
