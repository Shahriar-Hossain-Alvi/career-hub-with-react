import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import './JobDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyNow = () =>{
        saveJobApplication(idInt);
        toast("Applied Successfully");
    }

    return (
        <div>
            {/* banner */}
            <p className="absolute left-[45%] top-44 mb-7 font-black text-[#1A1919] text-4xl text-center">{job.company_name}</p>

            <div className="flex">
                <div className="w-1/2 pt-32 pb-36 jobDetails-banner1"></div>
                <div className="w-1/2 pt-32 pb-36 jobDetails-banner2"></div>
            </div>


            {/* details */}
            <div className="py-32">
                <h2 className="mb-2 font-extrabold text-[#1A1919] text-xl text-center">Job details of: {job.job_title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="md:col-span-2 lg:col-span-3 space-y-6">
                        <p className="font-extrabold text-[#1A1919]">Job Description: <span className="text-[#757575] font-medium" > {job.job_description}</span></p>

                        <p className="font-extrabold text-[#1A1919]">Job Responsibility: <span className="text-[#757575] font-medium">{job.job_responsibility}</span></p>

                        <h3 className="font-extrabold text-[#1A1919]">Educational Requirements:</h3>
                        <span className="text-[#757575] font-medium">{job.educational_requirements}</span>

                        <h3 className="font-extrabold text-[#1A1919]">Experiences:</h3>
                        <span className="text-[#757575] font-medium">{job.experiences}</span>
                    </div>
                    <div>
                        <div className="rounded-2xl p-8 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A]">
                            <h2 className="border-b font-extrabold text-xl text-[#1A1919] pb-4 border-[#9873FF]">Job Details</h2>

                            <div className='pt-6 pb-4 flex gap-3 items-center'>
                                <CiDollar className="text-[#7E90FE] text-2xl"></CiDollar>
                                <p className="text-xl font-bold text-[#474747]">Salary: <span className="font-medium text-[#757575]">{job.salary} (Per Month)</span></p>
                            </div>
                            <div className='pb-8 flex gap-3 items-center'>
                                <SlCalender className="text-[#7E90FE] text-xl"></SlCalender>
                                <p className="text-xl font-bold text-[#474747]">Job Title : <span className="font-medium text-[#757575]">{job.job_title}</span> </p>
                            </div>

                            <h2 className="border-b pb-4 border-[#9873FF]">Contact Information</h2>

                            <div className="pt-6 pb-4 flex gap-3 items-center">
                                <IoIosCall className="text-[#7E90FE] text-xl"></IoIosCall>
                                <p className="text-xl font-bold text-[#474747]">Phone : <span className="font-medium text-[#757575]">{job.contact_information.phone}</span></p>
                            </div>
                            <div className="pb-3 flex gap-3 items-center">
                                <CiMail className="text-[#7E90FE] text-xl"></CiMail>
                                <p className="text-xl font-bold text-[#474747]">Email : <span className="font-medium text-[#757575]">{job.contact_information.email}</span></p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <IoLocationOutline className="text-[#7E90FE] text-xl"></IoLocationOutline>
                                <p className="text-xl font-bold text-[#474747]">Address :<span className="font-medium text-[#757575]">{job.contact_information.address}</span></p>
                            </div>
                        </div>
                        <button onClick={handleApplyNow} className="btn w-full mt-4 text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white hover:from-[#9873FF] hover:to-[#9873FF]">Apply Now</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;