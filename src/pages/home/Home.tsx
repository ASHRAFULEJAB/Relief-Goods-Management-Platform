import Loader from "@/components/Loader";
import Testimonial from "@/components/Testimonial";

import { Link } from "react-router-dom";
import Aboutus from "../Aboutus";
import AllReliefCard from "../Allrelief/AllReliefCard";
import DistributionCenterLocation from "../DistributionCenterLocation";
import Banner from "./Banner";
import Carousal from "./Carousal";
import { useEffect, useState } from "react";
import CommunityGratitudeWall from "./CommunityGratitudeWall";
import { useGetReliefsQuery } from "@/redux/features/supply/supplyApi";
// import { useGetReliefsQuery } from "@/redux/api/baseApi";

export type TRelief = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
};

const Home = () => {
  const { data: reliefs, isLoading } = useGetReliefsQuery(undefined);

  const [initialLoading, setInitialLoading] = useState(true); // State to manage initial loading

  // Show the initial loader until the data is fetched
  useEffect(() => {
    if (!isLoading) {
      setInitialLoading(false);
    }
  }, [isLoading]);

  if (initialLoading) {
    return (
      <>
        <p className="text-red-500">Loading ....</p>
        <Loader />
      </>
    );
  }

  // Slice the first three relief items
  const limitedReliefs = reliefs?.data?.slice(0, 3);
  return (
    <div>
      {/* <div className="w-full">
        <Banner />
      </div> */}

      <div className="relative">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 overflow-y-hidden ">
          {limitedReliefs?.map((relief: TRelief) => (
            <AllReliefCard key={relief?._id} {...relief} />
          ))}
        </div>
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
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>

      <Testimonial />
      <Carousal />
      <Aboutus />
      <DistributionCenterLocation />
      <CommunityGratitudeWall />
    </div>
  );
};

export default Home;
