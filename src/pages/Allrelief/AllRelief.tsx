import Loader from "@/components/Loader";
import { useGetReliefsQuery } from "@/redux/features/supply/supplyApi";
import { TRelief } from "../home/Home";
import AllReliefSectionCard from "./AllReliefSectionCard";

const AllRelief = () => {
  const { data: reliefs, isLoading } = useGetReliefsQuery(undefined);
  console.log(reliefs);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <h1 className="bg-white text-white">hey</h1>
      <h1 className="bg-white text-white">hey</h1>
      <h1 className="bg-white text-white">hey</h1>
      <h1 className="bg-white text-white">hey</h1>
      <div className="text-center py-8 bg-gray-50 mb-3 rounded">
        <h1 className="text-4xl font-bold">
          Support our <span className="text-[#E37423]">causes</span> today
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Register today and join us in our mission and vision to save and
          change lives for the better.
        </p>
        <p className="mt-2 text-gray-500">Home › Reliefs</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-3  overflow-y-hidden  mb-10 overflow-hidden ">
        {reliefs?.data?.map((relief: TRelief) => (
          // console.log(relief)
          <>
            <AllReliefSectionCard key={relief?._id} {...relief} />
          </>
        ))}
      </div>
    </>
  );
};

export default AllRelief;
