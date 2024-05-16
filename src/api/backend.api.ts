import axios, { Axios } from "axios";
import {APIJobs} from "./jobs.api";

class BackendAPI{
    private api: Axios;
    public jobs: APIJobs;

    constructor(base_url: string="/api"){
        this.api = axios.create({
            baseURL: base_url
        });
        this.jobs = new APIJobs(this.api);
    }
}

export const BackendAPIProvider = new BackendAPI();