import { SizeType } from "antd/lib/config-provider/SizeContext";

export type Job = {
	title: string;
	type: string;
	salary: string;
	endDate: string;
	company: Company;
};

export type Company = {
	name: string;
	url: string;
	logo: string;
	location: string;
	info: string;
};

export type StateAction = {
	type: string;
	payload: any;
};

export type SignupFormDataT = {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	password: string;
	confirm_password: string;
	name?: string;
	category?: any;
};

export type SigninDataT = {
	username: string;
	password: string;
	token?: string;
};

export type SendEmailDataT = {
	email: string;
};
export interface InputProps {
	size: SizeType;
	type: string;
	label: string;
	name: string;
	message: string;
	placeholder: string;
	value: object | string;
	defaultValue?: string | number;
	handleChange: (e: any) => void;
}

export type ChangePasswordDataT = {
	old_password: string;
	new_password: string;
	confirm_password: string;
};

export type ProfileDataT = {
	bio: string;
	address: string;
	website: string;
	email: string;
	first_name: string;
	last_name: string;
	professional_email: string;
	phone: string;
};

export type AccountsDataT = {
	email: string;
	phone_no: string;
};

export type JobDataT = {
	responsibilities: string;
	qualifications: string;
	benifits: string;
	job_type: string;
	title: string;
	description: string;
	deadline: string;
	min_salary: number;
	max_salary: number;
	vacancy: number;
	status: string;
	company: [number];
};

export type CompanyInfoT = {
	name: string;
	email: string;
	info: string;
	phone: string;
	address: string;
	membership: string;
	website: string;
	linkedin: string;
	facebook: string;
	superadmin: string;
};
