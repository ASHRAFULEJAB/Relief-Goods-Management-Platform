import Testimonial from "@/components/Testimonial";
import Aboutus from "../Aboutus";
import AllRelief from "../Allrelief/AllRelief";
import DistributionCenterLocation from "../DistributionCenterLocation";
import Banner from "./Banner";
import Carousal from "./Carousal";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="relative">
        <AllRelief />
        <Link to="relief-goods">
          <button
            className="absolute flex items-center justify-center top-0 right-0 mt-4 
            ml-4 px-4 py-2 bg-[#E37423]
           text-white rounded-md shadow-md"
          >
            <span>View All</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>

      <Testimonial />
      <Carousal />
      <Aboutus />
      <DistributionCenterLocation />
    </div>
  );
};

export default Home;
