import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    //this is not the best way to load show all data

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div className="py-32">
            <div className="text-center mb-8 space-y-4">
                <h2 className="text-5xl font-extrabold text-[#1A1919]">Featured Jobs</h2>
                <p className="text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "text-center mt-10 data"}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-lg bg-gradient-to-r from-[#7E90FE] via-[#9873FF] to-[#7E90FE] text-white text-xl font-extrabold">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;    