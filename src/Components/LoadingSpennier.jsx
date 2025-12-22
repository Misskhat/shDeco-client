import { ClimbingBoxLoader } from "react-spinners";


const LoadingSpennier = () => {
    return (
        <div className="min-h-full sweet-loading flex justify-center items-center">
            <ClimbingBoxLoader
                color={"#36d7b7"}
                loading={true}
                size={15}
                aria-label="Loading Spinner"
            />
        </div>
    );
};

export default LoadingSpennier;