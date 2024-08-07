import Loader from "@/components/Loader";
import { useGetReliefsQuery } from "@/redux/features/supply/supplyApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllReliefCard from "../Allrelief/AllReliefCard";
import Contact from "./Contact";
import Partners from "./Partners";
import Service from "./Service";
import Stories from "./testimonial/Stories";
import Promotions from "./Promotions";

export type TRelief = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  description: string;
  descriptionHeader: string;
  donationAmount: string;
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
  const limitedReliefs = reliefs?.data?.slice(0, 4);

  return (
    <div>
      {/* New Design Section */}
      <div className="relative  bg-white mt-5 ">
        <div className="container mx-auto px-0  flex justify-between ">
          <div>
            <p className="text-orange-500 font-medium mb-0">Impact causes</p>
            <h1 className="text-4xl font-semibold text-black ">
              Support development <br /> and transform lives
            </h1>
          </div>
          <div className=" lg:mr-1">
            <Link to="relief-goods">
              <button
                className="absolute flex items-center justify-center top-0 right-0 mt-4 
            ml-4 px-4 py-3 bg-[#E37423]
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
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reliefs Section */}
      <>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 overflow-y-hidden lg:mr-1 ">
          {limitedReliefs?.map((relief: TRelief) => (
            <AllReliefCard key={relief?._id} {...relief} />
          ))}
        </div>
      </>

      <Service />
      <Promotions />
      {/* <Testimonial /> */}
      <Partners />
      <Stories />
      <Contact />

      {/* <Carousal /> */}
      {/* <Aboutus /> */}
      {/* <DistributionCenterLocation /> */}
      {/* <CommunityGratitudeWall /> */}
    </div>
  );
};

export default Home;
