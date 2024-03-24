import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job=> storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
        }
    }, []);

    return (
        <div>
            {/* banner */}
            <p className="absolute left-[45%] top-44 mb-7 font-black text-[#1A1919] text-4xl text-center">Applied Jobs</p>

            <div className="flex">
                <div className="w-1/2 pt-32 pb-36 jobDetails-banner1"></div>
                <div className="w-1/2 pt-32 pb-36 jobDetails-banner2"></div>
            </div>

            <div>
                <h2>Jobs applied: {appliedJobs.length}</h2>
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
                <ul>
                    {
                        appliedJobs.map(job => <li key={job.id}>
                            <span>{job.job_title} - {job.company_name} - {job.remote_or_onsite}</span>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;