import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div>

            <div className="card border-[#E8E8E8] rounded-lg shadow">
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-2xl text-[#474747]">
                        {job_title}
                    </h2>
                    <p className='text-[#757575] font-semibold text-xl'>{company_name}</p>
                    <div className="card-actions">
                        <button className="btn btn-s text-[#7E90FE] font-extrabold border-[#7E90FE] bg-transparent">{remote_or_onsite}</button>
                        <button className="btn text-[#7E90FE] font-extrabold border-[#7E90FE] bg-transparent">{job_type}</button>
                    </div>
                    <div className='flex
                     gap-4 text-xl font-semibold text-[#757575]'>
                        <div className='flex gap-3 items-center'>
                            <IoLocationOutline></IoLocationOutline>
                            <span>{location}</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CiDollar></CiDollar>
                            <span>{salary}</span>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn text-xl font-extrabold bg-gradient-to-r from-[#7E90FE] via-[#9873FF] to-[#7E90FE] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;