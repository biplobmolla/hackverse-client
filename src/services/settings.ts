import coreAxios from "utils/axios";

// Get Requests

export async function getProfileInfo(profileInfo: any){
    return await coreAxios.get("/accounts/profile/", profileInfo);
}

export async function fetchSettings(){
    return await coreAxios.get("accounts/settings/");
}

// Put Requests

export async function sendSettingValue(profile: any){
    return await coreAxios.put("/accounts/profile/", profile);
}

export async function sendPass(password: any){
    return await coreAxios.put("/accounts/change-password/", password);
}

export async function sendEmail(email: any){
    return await coreAxios.put("/accounts/profile/", email);
}

export async function sendOrganization(companyId:number, payload:any){
    return await coreAxios.put(`/accounts/company/${companyId}/`, payload);
}