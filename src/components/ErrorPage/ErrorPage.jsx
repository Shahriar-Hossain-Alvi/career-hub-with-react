import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col absolute top-1/2 left-1/2 text-center gap-10">   
            <h2 className="text-7xl">Oops!</h2> 
            <Link to='/'><button className="btn btn-lg btn-error text-white">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;   