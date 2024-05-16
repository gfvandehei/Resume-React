import axios from "axios";
import { createContext, useCallback, useState } from "react";

export interface IProfile{
    first_name: string;
    last_name: string;
    title: string;
    about_me_blurb: string;
    profile_image: string;
}

export const getProfile = async () => {
    const response = await axios.get<{data: IProfile}>("/api/profile");
    const data = response.data;
    return data.data;
}

export const useProfileAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [profile, setProfile] = useState<IProfile | undefined>(undefined);

    const fetchProfile = async () => {
        try{
            setIsLoading(true);
            const fetched_profile = await getProfile();
            setProfile(fetched_profile);
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
        profile,
        fetchprofile: useCallback(fetchProfile, [])
    }
}