import "./Home.css"
import {WorkHistoryCard} from "../components/WorkHistoryCard";
import {ProjectCard} from "../components/ProjectCard";
import { useEffect, useState, useContext } from "react";
import {useJobsAPI} from "../services/JobsProvider";
import {BackendAPIProvider} from "../api/backend.api";
import { useProfileAPI } from "../services/ProfileProvider";

export interface IServiceState{
    profile: any;
    jobs: Array<any>;
}

export function Home(){
    let jobsAPI = useJobsAPI();
    let profileAPI = useProfileAPI();

    useEffect(() => {
        jobsAPI.fetchAllJobs();
        profileAPI.fetchprofile();
    }, []);
    
    return (
        <>
        <div className="resume-container">
            <header id="resume-header">
                <h1>{profileAPI.profile?.first_name} {profileAPI.profile?.last_name}</h1>
                <h2>{profileAPI.profile?.title}</h2>
                <p>{profileAPI.profile?.about_me_blurb}</p>
                <div className="header-links">
                    <a href="https://github.com/gfvandehei">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                    <svg></svg>
                    <svg></svg>
                    <svg></svg>
                </div>
            </header>
            <main>
                <div className="section-header primary-color">About Me</div>
                <div className="about-me">
                    <p>
                        Back in 2015 I first discovered my love of designing software through my High Schools
                        robotics team. Experiencing the thrill of seeing something that I helped build move and solve
                        problems instilled a lasting appriciation and love for the field. Fast forward to today, the scope
                        of the problems I am solving has changed, but my passion for software design and
                        development remains the same.
                    </p>
                    <p>
                        Today I dip my toe in many different buckets of the software engineering world, from developing high performance
                        backends for automating system analysis, to building pipelines for feeding machine learning on the <a href="https://www.ll.mit.edu/r-d/cyber-security-and-information-sciences/lincoln-laboratory-supercomputing-center">LLSC</a>, to 
                        building web based user interface, and dabbling in hardware design, I truly believe myself to be a full stack engineer!
                    </p>
                    <p>
                        When out and about I enjoy camping in NH with my wife, biking around boston, Skiing, and windsurfing on the charles.
                    </p>
                </div>
                <div className="section-header primary-color">Work History</div>
                <div className="work-history">
                    {Object.keys(jobsAPI.jobs).map((key, index) => {
                        let job = jobsAPI.jobs[key];
                        console.log(job);
                        return (<WorkHistoryCard key={index} company={job.workplace.name} text={job.description} work_end={job.end_date} work_start={job.start_date} link={job.workplace.link} title={job.title} skills={[]}/>)
                    })}
                    {/*!moreJobs && <div onClick={() => setMoreJobs(true)} className="list-button">More</div>*/}
                    {/*
                        moreJobs && <>
                            <WorkHistoryCard company="MIT Lincoln Laboratories" text="asdasdasdasdasdasd asdasdas asdasdgasa" skills={["Python", "Typescript"]} work_end="2019" work_start="2019" link="" title="Cyber Physical Systems Student Co-op"/>
                            <WorkHistoryCard company="Exago" text="asdasdasdasdasdasd asdasdas asdasdgasa" skills={["Python", "Typescript"]} work_end="2018" work_start="2018" link="" title="Software Engineering Intern, NLP"/>
                            <WorkHistoryCard company="Thinkom" text="asdasdasdasdasdasd asdasdas asdasdgasa" skills={["Python", "Typescript"]} work_end="2017" work_start="2017" link="" title="Student Intern, Test Systems"/>
                            <div className="list-button" onClick={() => setMoreJobs(false)}>Less</div>
                        </> 
                */}

                </div>
                <div className="section-header primary-color">Projects</div>
                <div className="Projects">
                    <ProjectCard title="Zenlighting" subtitle="SW/HW project" description="" display_image_url="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKy5Jcu4WHiIAJ4YrgVvSHyDE8k9zigkoLEDbAwDOhhBfGvqTyPFuvf62ElSA81Kpkz82Rcpcz9BfL65038IrmG8JrFzXIhw" technologies={["python", "c++"]}/>
                </div>
                <section id="education">
                    <div className="section-header primary-color">Education</div>
                    <>RPI</>
                </section>
            </main>

        </div>
        </>
    )
}