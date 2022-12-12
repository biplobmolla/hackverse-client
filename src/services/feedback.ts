import coreAxios from "utils/axios";

export async function createFeedback(feedback: any){
    return await coreAxios.post("/misc/feedbacks/", feedback);
}