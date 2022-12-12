import coreAxios from "utils/axios";

export async function fetchCompanyEmail(id:number){
    return coreAxios.get(`/accounts/company/${id}`);
}