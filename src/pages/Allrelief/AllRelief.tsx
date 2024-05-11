import { useGetReliefsQuery } from "@/redux/api/api";
import AllReliefCard from "./AllReliefCard";
import Loader from "@/components/Loader";
import { TRelief } from "../home/Home";

const AllRelief = () => {
  const { data: reliefs, isLoading } = useGetReliefsQuery(undefined);
  console.log(reliefs);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1  gap-3  overflow-y-hidden ">
      {reliefs?.data?.map((relief: TRelief) => (
        // console.log(relief)
        <>
          <AllReliefCard key={relief?._id} {...relief} />
        </>
      ))}
    </div>
  );
};

export default AllRelief;
