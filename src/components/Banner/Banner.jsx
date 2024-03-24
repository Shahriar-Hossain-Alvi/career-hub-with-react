import bannerImg from '../../assets/images/user.png';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#faf8ff]">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">
                    <div className='w-2/5'>
                        <img src={bannerImg} />
                    </div>
                    <div className='w-3/5 pb-10'>
                        <h1 className="text-7xl font-extrabold text-[#1A1919]">One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                        <p className="text-lg font-medium text-[#757575] py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;