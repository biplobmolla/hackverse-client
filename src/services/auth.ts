import {
	AccountsDataT,
	ChangePasswordDataT,
	CompanyInfoT,
	ProfileDataT,
	SendEmailDataT,
	SigninDataT,
	SignupFormDataT,
} from "types";
import coreAxios from "utils/axios";

type ResetPasswordDataT = {
	password: string;
	uidb64: string;
	token: string;
};
type ResetPasswordParamsDataT = {
	uidb64: string;
	token: string;
};

export const createAccount = async (userdata: SignupFormDataT) => {
	return await coreAxios.post<SignupFormDataT>(
		"/accounts/registration/",
		userdata
	);
};

export const handleSignin = async (userData: SigninDataT) => {
	return await coreAxios.post<SigninDataT>("/accounts/login/", userData);
};

export const handleChangePassword = async (
	passwordData: ChangePasswordDataT
) => {
	try {
		const result = await coreAxios.put<{
			current_password: string;
			new_password: string;
		}>("/accounts/change-password/", {
			current_password: passwordData.old_password,
			new_password: passwordData.new_password,
		});
		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const handleLoadProfileData = async (username: string) => {
	try {
		const result = await coreAxios.get<ProfileDataT>(
			`/accounts/profile_details_view/${username}`
		);
		return result;
	} catch (error: any) {}
};

export const handleUpdateProfile = async (
	profileData: ProfileDataT | AccountsDataT,
	username: string
) => {
	try {
		const result = await coreAxios.put<ProfileDataT | AccountsDataT>(
			`/accounts/profile_details_view/${username}/`,
			profileData
		);
		return result;
	} catch (error: any) {
		return error;
	}
};

export const handleForgetPasswordEmail = async (userData: SendEmailDataT) => {
	try {
		const result = await coreAxios.post(
			"/accounts/reset-password-email/",
			userData
		);
		return result;
	} catch (error: any) {
		return error.response.data;
	}
};

export const handleResetPassword = async ({
	password,
	uidb64,
	token,
}: ResetPasswordDataT) => {
	try {
		const userData = { password, uidb64, token };
		const result = await coreAxios.patch(
			"/accounts/reset-password-done/",
			userData
		);
		return result;
	} catch (error: any) {
		return error.response.data;
	}
};

export const handleForgetPasswordTokenCheck = async ({
	uidb64,
	token,
}: ResetPasswordParamsDataT) => {
	try {
		const result = await coreAxios.get(
			`/accounts/password-reset/${uidb64}/${token}`
		);

		return result;
	} catch (error: any) {
		return error.response.data;
	}
};

export const handleLoadCompanies = async () => {
	try {
		const result = await coreAxios.get("/accounts/company/");

		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const handleLoadCompanyCategory = async () => {
	try {
		const result = await coreAxios.get("/accounts/company-category/");
		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const handleCreateCompany = async (
	companyInfo: CompanyInfoT,
	companySize: string,
	companyCategory: string
) => {
	try {
		const result = await coreAxios.post("/accounts/company/", {
			...companyInfo,
			size: companySize,
			category: companyCategory,
		});
		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const handleCompanyDetails = async (id: string) => {
	try {
		const result = await coreAxios.get(`/accounts/company-details/${id}/`);

		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const handleUpdateCompany = async (
	id: string,
	companyInfo: CompanyInfoT,
	companySize: string,
	companyCategory: string
) => {
	try {
		const result = await coreAxios.put(
			`/accounts/company-details/${parseInt(id)}/`,
			{
				...companyInfo,
				size: companySize,
				category: companyCategory,
			}
		);
		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const handleRemoveCompany = async (id: number) => {
	try {
		const result = await coreAxios.delete(`/accounts/company-details/${id}/`);
		return result;
	} catch (error: any) {
		return error.response;
	}
};

export const fetchUser = async () => {
	return await coreAxios.get("/accounts/basic_profile_data/");
};
