import {Axios} from "axios";

export class APIJobs{

    constructor(private api: Axios){}

    async listAllJobs(){
        let response = await this.api.get("/jobs/");
        return response.data.data;
    }
}