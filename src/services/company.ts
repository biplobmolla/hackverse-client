import coreAxios from "utils/axios";

export async function fetchCompanyData(id:number){
    return coreAxios.get(`/accounts/company/${id}`);
}