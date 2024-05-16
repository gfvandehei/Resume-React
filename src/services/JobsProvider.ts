import axios from "axios";
import { createContext, useCallback, useState } from "react";

export interface JobRoles{
    display_name: string;
    project_name?: string;
    summary: string;
    start_date: string;
    end_date: string;
    technologies: Array<string>;
}

export interface BasicJobModel{
    id: string;
    title: string;
    type: "INTERN" | "PROFESSIONAL" | "CO-OP";
    workplace: {
        name: string;
        link: string;
    }
    description: string;
    start_date: string;
    end_date: string;
    roles?: Array<JobRoles>;
}

export const getAllJobs = async () => {
    const response = await axios.get<{data: Array<{data: BasicJobModel, link: string}>}>("/api/jobs");
    const data = response.data;
    console.log(data);
    return data.data;
}

export const useJobsAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [jobs, setJobs] = useState<{[job_id: string]: BasicJobModel}>({});

    const fetchAllJobs = async () => {
        try{
            setIsLoading(true);
            const allJobs = await getAllJobs();
            let jobs: {[key: string]: BasicJobModel} = {}
            allJobs.forEach((value) => {
                jobs[value.data.id] = value.data;
            })
            setJobs(jobs);
            setIsLoading(false);
        } catch(err){
            setError(true);
            setIsLoading(false);
            throw err;
        }
    }

    return {
        isLoading,
        error,
        jobs,
        fetchAllJobs: useCallback(fetchAllJobs, [])
    }
}